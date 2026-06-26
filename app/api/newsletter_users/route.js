// app/api/newsletter_users/route.js
//
// Captures mailing-list signups (name + email + phone) from the site.
//
// PRODUCTION (Vercel): set the env var SHEET_WEBHOOK_URL to your Google Apps
// Script web-app URL (see NEWSLETTER-SETUP.md). Each signup is POSTed there and
// appended as a row to your Google Sheet. This is the path that works on Vercel.
//
// LOCAL DEV FALLBACK: if SHEET_WEBHOOK_URL is not set, signups are written to a
// local JSON file (data/newsletter-subscribers.json) so you can test without the
// sheet. Serverless hosts have a read-only filesystem, so this fallback does NOT
// persist on Vercel — configure SHEET_WEBHOOK_URL for production.

import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const STORE = path.join(DATA_DIR, "newsletter-subscribers.json");
const SHEET_WEBHOOK_URL = process.env.SHEET_WEBHOOK_URL;

// Simple, forgiving email check.
function isValidEmail(email) {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Forgiving phone check: at least 7 digits once symbols are stripped.
function isValidPhone(phone) {
  return typeof phone === "string" && phone.replace(/\D/g, "").length >= 7;
}

async function readSubscribers() {
  try {
    const raw = await fs.readFile(STORE, "utf8");
    return JSON.parse(raw);
  } catch {
    return []; // file doesn't exist yet
  }
}

// Local dev fallback — write to a JSON file.
async function saveToFile({ name, email, phone }) {
  const subscribers = await readSubscribers();

  // Skip duplicates (idempotent — re-subscribing is a no-op).
  if (subscribers.some((s) => s.email === email)) {
    return { duplicate: true };
  }

  subscribers.push({ name, email, phone, subscribedAt: new Date().toISOString() });
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(STORE, JSON.stringify(subscribers, null, 2), "utf8");
  return { duplicate: false };
}

// Production — forward to the Google Sheet via the Apps Script web app.
async function saveToSheet({ name, email, phone }) {
  const res = await fetch(SHEET_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      email,
      phone,
      subscribedAt: new Date().toISOString(),
    }),
  });

  if (!res.ok) {
    throw new Error(`Sheet webhook responded ${res.status}`);
  }

  // The Apps Script returns { result: "duplicate" } when the email already exists.
  let data = {};
  try {
    data = await res.json();
  } catch {
    // Non-JSON response still counts as success if status was ok.
  }
  return { duplicate: data?.result === "duplicate" };
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  const name = (body?.name || "").toString().trim();
  const email = (body?.email || "").toString().trim().toLowerCase();
  const phone = (body?.phone || "").toString().trim();

  if (!name) {
    return NextResponse.json({ message: "Please enter your name." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 }
    );
  }
  if (!isValidPhone(phone)) {
    return NextResponse.json(
      { message: "Please enter a valid phone number." },
      { status: 400 }
    );
  }

  try {
    const { duplicate } = SHEET_WEBHOOK_URL
      ? await saveToSheet({ name, email, phone })
      : await saveToFile({ name, email, phone });

    if (duplicate) {
      return NextResponse.json({ message: "You're already on the list — thanks!" });
    }
    return NextResponse.json({ message: "You're on the list — welcome!" });
  } catch (err) {
    console.error("Newsletter signup failed:", err);
    return NextResponse.json(
      { message: "Something went wrong saving your signup. Please try again." },
      { status: 500 }
    );
  }
}
