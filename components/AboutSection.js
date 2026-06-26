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
  { value: "170", label: "candidate records" },
  { value: "95", label: "manually validated candidates" },
  { value: "93", label: "validation calls completed" },
  { value: "16", label: "fit-check-ready profiles" },
  { value: "$542.44", label: "rough paid traffic test" },
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

const showProofImages = [
  {
    src: "/gallery/COH-209.jpg",
    alt: "Crowd and band at a Champions of Hope show",
    caption: "Show night",
  },
  {
    src: "/gallery/coh-10-crowd-hand.jpg",
    alt: "Crowd raising a hand at a Champions of Hope show",
    caption: "Crowd energy",
  },
  {
    src: "/assets/AboutSection/squared1.jpg",
    alt: "Artist performing at a Champions of Hope show",
    caption: "Live performance",
  },
  {
    src: "/gallery/coh-10-crowd.jpg",
    alt: "Crowd gathered at Champions of Hope 10",
    caption: "People in the room",
  },
];

const showTestimonials = [
  {
    quote:
      "I cannot remember a charity event we have done that is as good as COH... the homegrown non-corporate nature of it makes the shows feel we are actually making a difference, like our contribution actually matters.",
    attribution: "Beni, Sleepy Gonzales",
    type: "Artist feedback",
  },
  {
    quote:
      "Awesome night! The CoH team are contributing a valuable space to the local scene and are great to work with.",
    attribution: "Luke Bidulka, guitarist for Witiko",
    type: "Artist feedback",
  },
  {
    quote:
      "Communication was easy and everything seemed really well organized. Can totally tell it’s a passion project. You all really went above and beyond.",
    attribution: "Josh McKenna",
    type: "Artist feedback",
  },
  {
    quote:
      "The experience was amazing! Incredible seeing all the people who live for music and art and want to help support fellow artists and vancouverites.",
    attribution: "Cason Lof, drummer for Caught Feelings",
    type: "Artist feedback",
  },
  {
    quote:
      "I had so much fun, the music was incredible and the event supported a great cause. The crowd was hyped and happy! What else can you ask for?",
    attribution: "Audience member",
    type: "Audience feedback",
  },
  {
    quote:
      "Everybody involved was friendly and passionate. Promotion on C.O.H’s end made the show feel professional and I really enjoyed working with Jimmy, C.O.H, and The Mezzanine.",
    attribution: "Silas, bass player for Transient",
    type: "Artist feedback",
  },
  {
    quote:
      "Everything about the event from the promotion and the actual evening went really well. Incredibly glad to have been included and would do it all again in a heartbeat!",
    attribution: "Brooks, The Lily Dippers",
    type: "Artist feedback",
  },
  {
    quote:
      "The atmosphere was so positive, and the team was super helpful and organized. Overall, it was a fantastic event, and I’d love to join again!",
    attribution: "Anonymous artist vendor",
    type: "Artist vendor feedback",
  },
];

const aboutImages = [
  {
    src: "/assets/AboutSection/squared1.jpg",
    alt: "Artist performing at a Champions of Hope show",
  },
  {
    src: "/assets/AboutSection/squared2.jpg",
    alt: "Crowd and community at a Champions of Hope event",
  },
  {
    src: "/assets/AboutSection/squared3.jpg",
    alt: "Band performing at a Champions of Hope show",
  },
  {
    src: "/gallery/coh-10-crowd-hand.jpg",
    alt: "Crowd raising a hand at a Champions of Hope show",
  },
];

const eventApplications = [
  {
    title: "Band / Artist Application",
    description: "For bands and artists who want to play a future Champions of Hope show.",
    href: "https://forms.gle/95vM7RY89dMAGERT6",
    buttonLabel: "Apply as Band / Artist",
    buttonClass: "bg-[#3D7AD5] text-white hover:bg-white hover:text-black",
  },
  {
    title: "Vendor Application",
    description: "For local vendors, artists, and makers who want a table at an upcoming event.",
    href: "https://forms.gle/qxkRX8BeCK3uYdP27",
    buttonLabel: "Apply as Vendor",
    buttonClass: "bg-[#3D7AD5] text-white hover:bg-white hover:text-black",
  },
  {
    title: "Sponsorship Inquiry",
    description: "For sponsors interested in supporting a future Champions of Hope show.",
    href: "https://forms.gle/oet8PHWEm2Hcixkr8",
    buttonLabel: "Sponsorship Inquiry",
    buttonClass: "bg-[#FFB632] text-black hover:bg-white",
  },
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
            {aboutImages.map((image) => (
              <div
                key={image.src}
                className="relative group overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
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
                href="mailto:jimmy.ortiz@championsofhope.io?subject=FieldProof%20fit-check%20profile"
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
              We&apos;re not staffing, and we&apos;re not a lead list.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Before anyone reaches your hiring team, we check the basics by phone: work eligibility, transportation, real experience, when they can start, and whether they actually want the trade.
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
            <h2 className="text-3xl font-black uppercase">What we don&apos;t do.</h2>
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
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#FFB632]">
                Lifetime Champions of Hope impact
              </p>
              <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl">
                Built on real shows, real sponsors, and real money moved back into the community.
              </h2>
            </div>
            <p className="max-w-sm text-center text-sm leading-6 text-gray-400 lg:mx-0">
              Hover over a card to reveal the number. On mobile, tap once.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {lifetimeImpact.map((item) => (
              <button
                key={item.label}
                type="button"
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-left transition hover:border-[#FFB632]/70 hover:bg-white/[0.07] focus:border-[#FFB632] focus:outline-none focus:ring-2 focus:ring-[#FFB632]/60"
              >
                <p className="relative z-10 text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
                  {item.label}
                </p>
                <div className="relative mt-5 inline-block">
                  <p className="relative z-10 select-none text-3xl font-black text-[#FFB632] opacity-15 blur-[7px] transition duration-300 group-hover:opacity-100 group-hover:blur-0 group-focus:opacity-100 group-focus:blur-0 group-active:opacity-100 group-active:blur-0 sm:text-4xl">
                    {item.value}
                  </p>
                </div>
                <p className="relative z-10 mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 group-hover:text-gray-300 group-focus:text-gray-300">
                  Reveal impact
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="show-proof" className="scroll-mt-28 bg-[#1E1B1B] px-6 py-20 text-white sm:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="grid grid-cols-2 gap-4">
              {showProofImages.map((image, index) => (
                <div
                  key={image.src}
                  className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-black shadow-xl ${index === 0 ? "col-span-2 aspect-[16/10]" : "aspect-[4/3]"}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FFB632]">
                      {image.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl lg:p-10">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#FFB632]">
                From the shows
              </p>
              <h2 className="text-4xl font-black uppercase leading-tight sm:text-5xl">
                Real feedback from artists, vendors, and people in the room.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-200">
                Champions of Hope started with Vancouver shows built around local music, art, community causes, and people actually showing up.
              </p>
              <p className="mt-5 rounded-2xl border border-[#FFB632]/30 bg-black/30 p-5 text-sm font-semibold leading-7 text-gray-200">
                25% of ticket sales are donated to the selected cause. The remaining ticket revenue helps cover fixed artist guarantees and event costs.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {showTestimonials.map((testimonial) => (
              <article
                key={testimonial.attribution}
                className="flex h-full flex-col rounded-3xl border border-white/10 bg-black/30 p-6 transition hover:border-[#FFB632]/60 hover:bg-black/45"
              >
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3D7AD5]">
                  {testimonial.type}
                </p>
                <blockquote className="mt-5 flex-1 text-base font-semibold leading-7 text-gray-100">
                  “{testimonial.quote}”
                </blockquote>
                <p className="mt-6 border-t border-white/10 pt-4 text-sm font-bold text-[#FFB632]">
                  {testimonial.attribution}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#FFB632]">
              Support the next show
            </p>
            <h3 className="mx-auto mt-3 max-w-3xl text-3xl font-black uppercase leading-tight sm:text-4xl">
              Sponsor a future Champions of Hope show.
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-300">
              Your sponsorship covers the fixed costs of the night, so the artists still get paid and the charity still gets its cut. You put your name on a room full of people who showed up for a local cause.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="https://forms.gle/oet8PHWEm2Hcixkr8"
                className="rounded-full bg-[#FFB632] px-7 py-4 text-center font-bold text-black transition hover:bg-white"
              >
                Sponsorship Inquiry
              </Link>
              <Link
                href="https://forms.gle/95vM7RY89dMAGERT6"
                className="rounded-full bg-[#3D7AD5] px-7 py-4 text-center font-bold text-white transition hover:bg-white hover:text-black"
              >
                Apply as Band / Artist
              </Link>
              <Link
                href="/watch"
                className="rounded-full border border-white/30 px-7 py-4 text-center font-bold text-white transition hover:bg-white/10"
              >
                View Gallery
              </Link>
            </div>
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

          <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left sm:p-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#FFB632]">
                Want to be part of a show?
              </p>
              <h3 className="text-3xl font-black uppercase sm:text-4xl">
                Apply for the right lane.
              </h3>
            </div>

            <div className="mt-10 grid items-stretch gap-6 md:grid-cols-3">
              {eventApplications.map((application) => (
                <div key={application.title} className="flex h-full min-h-[320px] flex-col rounded-2xl border border-white/10 bg-black/30 p-8 md:min-h-[350px]">
                  <h4 className="text-xl font-black uppercase leading-tight">{application.title}</h4>
                  <p className="mt-5 text-sm leading-7 text-gray-300">
                    {application.description}
                  </p>
                  <a
                    href={application.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto inline-flex w-fit rounded-full px-6 py-3 text-sm font-bold transition ${application.buttonClass}`}
                  >
                    {application.buttonLabel}
                  </a>
                </div>
              ))}
            </div>
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
              Email Jimmy Ortiz: jimmy.ortiz@championsofhope.io · 778-533-8369
            </p>
          </div>
          <a
            href="mailto:jimmy.ortiz@championsofhope.io?subject=FieldProof%20fit-check%20profile"
            className="rounded-full bg-[#3D7AD5] px-7 py-4 text-center font-bold text-white transition hover:bg-black"
          >
            Request a Fit-Check Profile
          </a>
        </div>
      </section>
    </>
  );
}
