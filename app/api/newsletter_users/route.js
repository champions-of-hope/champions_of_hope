// app/api/users/route.ts
import {NextResponse } from "next/server";


export async function POST(request) {
  const data = await request.json();
  // Process data
  return NextResponse.json({ message: "User created", data });
}
