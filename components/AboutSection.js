"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedin,
  FaTiktok,
  FaFacebook,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const proofStats = [
  { value: "150+", label: "candidate leads" },
  { value: "70+", label: "manually validated candidates" },
  { value: "70+", label: "validation calls completed" },
  { value: "13", label: "fit-check-ready profiles" },
  { value: "$450", label: "rough paid traffic test" },
];

const partnerTypes = [
  "Mechanical contractors",
  "Electrical contractors",
  "Plumbing and pipe trades contractors",
  "Fire protection / sprinkler contractors",
  "General contractors",
  "Trade schools",
  "Workforce partners",
  "Union intake teams",
];

const notFieldProof = [
  "Not a staffing agency",
  "Not a temp agency",
  "Not a raw lead vendor",
  "Not a job guarantee",
  "Not a replacement for internal hiring teams",
  "Not a promise of union intake, school admission, or employment",
];

const lifetimeImpact = [
  { value: "$22,250", label: "lifetime sponsor dollars raised" },
  { value: "$4,591", label: "donated to local charities" },
  { value: "$16,783", label: "paid to local artists" },
  { value: "$20,324", label: "given back to charities and artists" },
];

export default function AboutSection() {
  const musicPlatforms = [
    {
      href: "https://www.linkedin.com/company/106714301",
      icon: <FaLinkedin className="text-2xl" />,
      label: "Linkedin",
    },
    {
      href: "https://www.tiktok.com/@champions.of.hope.series",
      icon: <FaTiktok className="text-2xl" />,
      label: "Tiktok",
    },
    {
      href: "https://www.facebook.com/profile.php?id=61577283400098&sk=about",
      icon: <FaFacebook className="text-2xl" />,
      label: "Facebook",
    },
    {
      href: "https://www.youtube.com/@champions.of.hope.series",
      icon: <FaYoutube className="text-2xl" />,
      label: "YouTube",
    },
    {
      href: "https://www.instagram.com/champions.of.hope/",
      icon: <FaInstagram className="text-2xl" />,
      label: "Instagram",
    },
  ];

  return (
    <>
      <section id="about" className="scroll-mt-28 bg-[#1E1B1B] px-6 py-20 text-white sm:px-12">
        <div className="container mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <Image
                  src={`/assets/AboutSection/squared${index}.jpg`}
                  alt={`Champions of Hope community event image ${index}`}
                  width={400}
                  height={400}
                  className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-64 lg:h-72"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              </div>
            ))}
          </div>

          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-md lg:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#FFB632]">
              What Champions of Hope is becoming
            </p>
            <h2 className="text-4xl font-black uppercase leading-tight sm:text-5xl">
              We started with shows. Now we are building a trades-readiness filter.
            </h2>
            <p className="text-lg leading-8 text-gray-200">
              Champions of Hope started through live events, local artists, sponsors, and community fundraising in Vancouver. That story still matters. It proves we can build trust, get people to show up, and turn attention into action.
            </p>
            <p className="text-lg leading-8 text-gray-200">
              FieldProof is the next layer: a candidate-readiness filter for trades employers and workforce partners. We help teams waste less time on unready candidates by manually validating people before they reach hiring or intake teams.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/fieldproof"
                className="rounded-full bg-[#FFB632] px-6 py-3 text-center font-bold text-black transition hover:bg-white"
              >
                Learn About FieldProof
              </Link>
              <a
                href="mailto:jimmy.ortiz@championsofhopeseries.com?subject=FieldProof%20fit-check%20profile"
                className="rounded-full border border-white/30 px-6 py-3 text-center font-bold text-white transition hover:bg-white/10"
              >
                Request a Fit-Check Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-[#1E1B1B] sm:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#3D7AD5]">
              Now building FieldProof
            </p>
            <h2 className="text-4xl font-black uppercase leading-tight sm:text-5xl">
              Not staffing. Not raw leads. Better signal before your team spends time.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              We manually screen candidates before they reach hiring or intake teams — work eligibility, transportation, trade interest, hands-on experience, timeline, wage expectations, responsiveness, and readiness.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {proofStats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-black/10 bg-[#F6F6F6] p-6">
                <p className="text-4xl font-black text-[#1E1B1B]">{stat.value}</p>
                <p className="mt-2 font-semibold text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-gray-600">
            These are early numbers, not final proof. The next proof layer is buyer feedback, interviews, starts, and retention.
          </p>
        </div>
      </section>

      <section className="bg-[#0f0f0f] px-6 py-20 text-white sm:px-12">
        <div className="container mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#FFB632]">
              Who this helps
            </p>
            <h2 className="text-3xl font-black uppercase">Built for teams that need cleaner candidate signal.</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {partnerTypes.map((type) => (
                <div key={type} className="rounded-xl border border-white/10 bg-black/30 p-4 font-semibold">
                  {type}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#3D7AD5]">
              What FieldProof is not
            </p>
            <h2 className="text-3xl font-black uppercase">Clear boundaries build trust.</h2>
            <div className="mt-6 grid gap-3">
              {notFieldProof.map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-black/30 p-4 font-semibold">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFB632] px-6 py-16 text-black sm:px-12">
        <div className="container mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em]">
              Two paths. One brand.
            </p>
            <h2 className="text-4xl font-black uppercase leading-tight sm:text-5xl">
              Employers go to FieldProof. Artists and community go to events.
            </h2>
          </div>
          <div className="grid gap-4">
            <Link href="/fieldproof" className="rounded-2xl bg-black p-6 font-bold text-white transition hover:bg-white hover:text-black">
              For Employers / Workforce Partners → FieldProof
            </Link>
            <Link href="/#impact" className="rounded-2xl border border-black p-6 font-bold transition hover:bg-black hover:text-white">
              For Artists / Community / Shows → Champions of Hope Events
            </Link>
          </div>
        </div>
      </section>

      <section id="impact" className="scroll-mt-28 bg-[#141414] px-6 py-16 text-white sm:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#FFB632]">
                Lifetime Champions of Hope impact
              </p>
              <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl">
                Built on real shows, real sponsors, and real money moved back into the community.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-gray-400">
              Hover over a card to reveal the number. On mobile, tap once. This is context — FieldProof is still the main offer.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {lifetimeImpact.map((item) => (
              <button
                key={item.label}
                type="button"
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-left transition hover:border-[#FFB632]/70 hover:bg-white/[0.07] focus:border-[#FFB632] focus:outline-none focus:ring-2 focus:ring-[#FFB632]/60"
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
                  {item.label}
                </p>
                <p className="mt-5 select-none text-3xl font-black text-[#FFB632] opacity-25 blur-sm transition duration-300 group-hover:opacity-100 group-hover:blur-0 group-focus:opacity-100 group-focus:blur-0 sm:text-4xl">
                  {item.value}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 group-hover:text-gray-300 group-focus:text-gray-300">
                  Reveal impact
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="scroll-mt-28 bg-[#1E1B1B] px-6 py-20 text-white sm:px-12">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#FFB632]">
            Events and community origin
          </p>
          <h2 className="text-4xl font-black uppercase sm:text-5xl">The shows still matter.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-200">
            We are still doing shows. We are still supporting local artists, volunteers, sponsors, and causes. FieldProof is the business direction, but we are not forgetting where Champions of Hope came from. For show updates, flyers, and community posts, check our Instagram.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://www.instagram.com/champions.of.hope/"
              className="rounded-full bg-[#FFB632] px-7 py-4 font-bold text-black transition hover:bg-white"
            >
              Check Instagram for show updates
            </Link>
            <Link
              href="/watch"
              className="rounded-full border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white/10"
            >
              View Gallery
            </Link>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="w-full md:w-10/12 lg:w-9/12 text-center">
              <h4 className="mb-4 text-xl font-semibold uppercase">Check out our socials</h4>
              <ul className="mt-4 flex justify-center space-x-4">
                {musicPlatforms.map((platform) => (
                  <li key={platform.label}>
                    <Link
                      href={platform.href}
                      className="text-white transition-colors hover:text-[#FFB632]"
                      aria-label={`Open ${platform.label}`}
                    >
                      {platform.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 text-[#1E1B1B] sm:px-12">
        <div className="container mx-auto flex max-w-6xl flex-col gap-6 rounded-3xl border border-black/10 bg-[#F6F6F6] p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.3em] text-[#3D7AD5]">
              For contractors / workforce partners
            </p>
            <h2 className="text-3xl font-black uppercase">Want to review a screened candidate profile?</h2>
            <p className="mt-3 text-lg text-gray-700">
              Email Jimmy Ortiz: jimmy.ortiz@championsofhopeseries.com · 778-533-8369
            </p>
          </div>
          <a
            href="mailto:jimmy.ortiz@championsofhopeseries.com?subject=FieldProof%20fit-check%20profile"
            className="rounded-full bg-[#3D7AD5] px-7 py-4 text-center font-bold text-white transition hover:bg-black"
          >
            Request a Fit-Check Profile
          </a>
        </div>
      </section>
    </>
  );
}
