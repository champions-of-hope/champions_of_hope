"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const screeningItems = [
  "Work eligibility",
  "Location and commute",
  "Transportation",
  "Trade interest",
  "Hands-on or site experience",
  "Tool exposure",
  "Timeline to start",
  "Wage expectations",
  "Responsiveness",
  "Consent before profile sharing",
];

const partnerTypes = [
  "Mechanical contractors",
  "Electrical contractors",
  "Plumbing and pipe trades contractors",
  "Fire protection and sprinkler contractors",
  "General contractors",
  "Trade schools and workforce partners",
];

const notIncluded = [
  "No guaranteed hires",
  "No payroll or staffing services",
  "No raw lead spreadsheets",
  "No promise of union intake or school admission",
  "No replacement of your internal hiring team",
];

export default function FieldProofPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0f0f0f] text-white">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#111111] via-[#1E1B1B] to-[#101827] px-6 pb-20 pt-32 md:px-12 md:pb-28 md:pt-40">
          <div className="absolute right-[-120px] top-10 h-72 w-72 rounded-full bg-[#FFB632]/20 blur-3xl" />
          <div className="absolute bottom-[-100px] left-[-100px] h-72 w-72 rounded-full bg-[#3D7AD5]/20 blur-3xl" />

          <div className="relative mx-auto max-w-6xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#FFB632]">
              FieldProof by Champions of Hope
            </p>
            <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">
              Trades candidates screened before your team spends time.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">
              FieldProof helps BC contractors, trade schools, and workforce partners reduce hiring waste by manually validating candidates before they reach hiring or intake teams.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:jimmy.ortiz@championsofhope.io?subject=FieldProof%20fit-check%20profile"
                className="rounded-full bg-[#FFB632] px-7 py-4 text-center font-bold text-black transition hover:bg-white"
              >
                Request a fit-check profile
              </a>
              <a
                href="tel:7785338369"
                className="rounded-full border border-white/30 px-7 py-4 text-center font-bold text-white transition hover:border-white hover:bg-white/10"
              >
                Call 778-533-8369
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-12">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#3D7AD5]">
                What it is
              </p>
              <h2 className="text-3xl font-black uppercase">A front-end readiness filter.</h2>
              <p className="mt-5 leading-8 text-gray-200">
                FieldProof is not a staffing agency and does not send raw lead lists. We screen candidates for the signals that usually waste time before interviews, intakes, or pathway conversations even begin.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#FFB632]">
                The problem
              </p>
              <h2 className="text-3xl font-black uppercase">Interest is not readiness.</h2>
              <p className="mt-5 leading-8 text-gray-200">
                A candidate can say they want the trades and still be unreachable, unprepared, unrealistic, not eligible, or not worth your team&apos;s time yet. FieldProof is built to separate casual interest from usable candidate signal.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16 text-[#1E1B1B] md:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#3D7AD5]">
                What we screen for
              </p>
              <h2 className="text-4xl font-black uppercase md:text-5xl">Basic signals should be confirmed before intake.</h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {screeningItems.map((item) => (
                <div key={item} className="rounded-2xl border border-black/10 bg-[#F6F6F6] p-5 font-semibold">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-12">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#FFB632]">
                Early signal
              </p>
              <h2 className="text-4xl font-black uppercase md:text-5xl">The first layer is working. The next layer is buyer feedback.</h2>
              <p className="mt-6 leading-8 text-gray-200">
                FieldProof is still early. These numbers are directional, not final proof. The next proof layer is buyer review, interviews, starts, and retention.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-[#FFB632] p-6 text-black">
                <p className="text-4xl font-black">150+</p>
                <p className="mt-2 font-semibold">candidate leads</p>
              </div>
              <div className="rounded-3xl bg-[#3D7AD5] p-6 text-white">
                <p className="text-4xl font-black">70+</p>
                <p className="mt-2 font-semibold">manually validated</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-4xl font-black">70+</p>
                <p className="mt-2 font-semibold">validation calls completed</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-4xl font-black">13</p>
                <p className="mt-2 font-semibold">fit-check-ready profiles</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F6F6F6] px-6 py-16 text-[#1E1B1B] md:px-12">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-black uppercase">Who it helps</h2>
              <div className="mt-6 grid gap-3">
                {partnerTypes.map((type) => (
                  <div key={type} className="rounded-xl border border-black/10 p-4 font-semibold">
                    {type}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-[#1E1B1B] p-8 text-white shadow-sm">
              <h2 className="text-3xl font-black uppercase">What we do not do</h2>
              <div className="mt-6 grid gap-3">
                {notIncluded.map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-4 font-semibold">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-12">
          <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#FFB632]">
              What partners receive
            </p>
            <h2 className="text-4xl font-black uppercase md:text-5xl">Short profiles, clear caveats, better signal.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-black/30 p-6">
                <h3 className="text-xl font-black uppercase">Fit-check profiles</h3>
                <p className="mt-3 text-gray-300">A short candidate summary built for quick review, not a raw spreadsheet.</p>
              </div>
              <div className="rounded-2xl bg-black/30 p-6">
                <h3 className="text-xl font-black uppercase">Screening notes</h3>
                <p className="mt-3 text-gray-300">Confirmed basics, risk notes, trade lane, and what still needs to be verified.</p>
              </div>
              <div className="rounded-2xl bg-black/30 p-6">
                <h3 className="text-xl font-black uppercase">Buyer feedback loop</h3>
                <p className="mt-3 text-gray-300">The filter improves when partners tell us what would be worth an interview.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-12">
          <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-12">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#3D7AD5]">
              For candidates
            </p>
            <h2 className="text-4xl font-black uppercase md:text-5xl">Interested in the trades?</h2>
            <p className="mt-5 max-w-3xl leading-8 text-gray-200">
              Fill out our short trades intake form. We’ll review your answers and may follow up if there is a useful next step.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-400">
              This is not a job application. We do not guarantee jobs, union intake, school admission, apprenticeship placements, or interviews. The form helps us understand your trade interest, timeline, experience, and readiness.
            </p>
            <a
              href="https://form.typeform.com/to/wOOli4hc"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-[#3D7AD5] px-7 py-4 text-center font-bold text-white transition hover:bg-white hover:text-black"
            >
              Start Trades Intake
            </a>
          </div>
        </section>

        <section className="bg-[#FFB632] px-6 py-16 text-black md:px-12">
          <div className="mx-auto max-w-6xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em]">For companies</p>
            <h2 className="mx-auto max-w-3xl text-4xl font-black uppercase md:text-5xl">
              Want to ask about FieldProof?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8">
              Send a quick note and I’ll follow up. This opens your email app with my address already filled in.
            </p>
            <a
              href="mailto:jimmy.ortiz@championsofhope.io?subject=FieldProof%20inquiry"
              className="mt-8 inline-flex rounded-full bg-[#1E1B1B] px-10 py-5 text-lg font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-black"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}