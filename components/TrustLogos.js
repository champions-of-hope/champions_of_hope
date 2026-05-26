"use client";

const sponsors = [
  { name: "Allteck", src: "/assets/trust/Allteck-logo_sponsor.jpg", href: "https://allteck.com/" },
  { name: "BC Insulators Union", src: "/assets/trust/bc_insulators_logo_sponsor.png", href: "https://www.insulators118.org/en" },
  { name: "EJTC", src: "/assets/trust/EJTC_sponsor.png", href: "https://www.ejtc.org/" },
  { name: "LiUNA Local 1611", src: "/assets/trust/LiUna_sponsor.png", href: "https://www.liuna1611.org/" },
  { name: "Long & McQuade", src: "/assets/trust/Long-McQuade-Logo_sponsor.webp", href: "https://www.long-mcquade.com/" },
  { name: "Modern Niagara", src: "/assets/trust/modern_niagra-logo._sponsor.svg", href: "https://modernniagara.com/locations/vancouver/" },
  { name: "PML Professional Mechanical Ltd.", src: "/assets/trust/PML-logo-color_sponsor.png", href: "https://pmlbc.com/" },
  { name: "SkillPlan", src: "/assets/trust/SkillPlan_Lockup-Blue_sponsor.png", href: "https://skillplan.ca/" },
  { name: "Total Energy Systems", src: "/assets/trust/TES_Sponsor..png", href: "https://tesltd.ca/" },
  { name: "UAPIC", src: "/assets/trust/UAPIC_sponsor.jpg", href: "https://uapicbc.ca/" },
  { name: "Viking Fire Protection", src: "/assets/trust/VikingCoulEN._sponsor.png", href: "https://vikingfire.ca/" },
];

const charities = [
  { name: "Vancouver Aboriginal Friendship Centre Society", src: "/assets/trust/253_VAFCS_charity.jpg", href: "https://vafcs.org/" },
  { name: "Backpack Buddies", src: "/assets/trust/BPB_charity.png", href: "https://www.backpackbuddies.ca/", featured: true, logoClass: "max-h-36 scale-125" },
  { name: "CMHA North and West Vancouver", src: "/assets/trust/CMHA NWV_charity.png", href: "https://northwestvancouver.cmha.bc.ca/" },
  { name: "CMHA Vancouver-Fraser", src: "/assets/trust/cmha_vancouver-fraser_charity.png", href: "https://bc.cmha.ca/cmha-vancouver-fraser-update/" },
  { name: "Crisis Centre BC", src: "/assets/trust/crisis-centre_charity.png", href: "https://www.crisiscentre.bc.ca/" },
  { name: "Downtown Eastside Women’s Centre", src: "/assets/trust/dewc-logo_charity.png", href: "https://dewc.ca/" },
  { name: "Empower Through Music", src: "/assets/trust/empowermusic_charity.jpg", href: "https://empowerthroughmusic.org/" },
  { name: "Lower Mainland Christmas Bureau", src: "/assets/trust/LMCB_Logo_vector_charity.webp", href: "https://www.lmcb.ca/" },
  { name: "Greater Vancouver Food Bank", src: "/assets/trust/vfb_charity.png", href: "https://foodbank.bc.ca/", featured: true },
  { name: "Carnegie Housing Project", src: "/assets/trust/chp-CHARITY.webp", href: "https://www.carnegiehousingproject.ca/" },
];

function LogoCard({ logo }) {
  const imageClass = logo.logoClass
    ? `${logo.logoClass} w-full object-contain transition duration-300 group-hover:scale-[1.04]`
    : logo.featured
      ? "max-h-28 w-full object-contain transition duration-300 group-hover:scale-[1.04]"
      : "max-h-20 w-full object-contain transition duration-300 group-hover:scale-[1.03]";

  const innerCard = (
    <>
      <img
        src={logo.src}
        alt={`${logo.name} logo`}
        loading="lazy"
        className={imageClass}
        onError={(event) => {
          event.currentTarget.style.display = "none";
          const fallback = event.currentTarget.nextElementSibling;
          if (fallback) fallback.style.display = "block";
        }}
      />
      <span className="hidden text-center text-sm font-bold uppercase tracking-wide text-[#1E1B1B]">
        {logo.name}
      </span>
    </>
  );

  const cardClass = "group flex min-h-[132px] items-center justify-center overflow-hidden rounded-3xl border border-black/10 bg-[#F8F6F0] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#FFB632]";

  if (logo.href) {
    return (
      <a
        href={logo.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${logo.name} website`}
        className={cardClass}
      >
        {innerCard}
      </a>
    );
  }

  return <div className={cardClass}>{innerCard}</div>;
}

export default function TrustLogos() {
  return (
    <section className="bg-[#111111] px-6 py-20 text-white sm:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#FFB632]">
            Built with real partners
          </p>
          <h2 className="text-4xl font-black uppercase leading-tight sm:text-5xl">
            Sponsors backed the shows. Local causes received the support.
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-300">
            Champions of Hope has already worked in the real world — with sponsors, trades organizations, community groups, and local nonprofits. That proof is what FieldProof is being built on.
          </p>
        </div>

        <div className="mt-14">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <h3 className="text-center text-sm font-black uppercase tracking-[0.25em] text-[#3D7AD5]">
              Show sponsors
            </h3>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sponsors.map((logo) => (
              <LogoCard key={logo.name} logo={logo} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <h3 className="text-center text-sm font-black uppercase tracking-[0.25em] text-[#FFB632]">
              Causes supported
            </h3>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {charities.map((logo) => (
              <LogoCard key={logo.name} logo={logo} />
            ))}
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-7 text-gray-400">
          Logos represent past Champions of Hope show sponsors and causes supported through event fundraising. This section is included as credibility context, not as a claim that every organization is currently involved in FieldProof.
        </p>
      </div>
    </section>
  );
}
