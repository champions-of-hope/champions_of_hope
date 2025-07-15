import Image from "next/image";

export default function OurStory() {
  return (
    <section className="bg-black text-white py-[50px] pt-[100px]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <p className="text-lg leading-relaxed md:text-left text-center">
              “Champions of Hope started as someone planning a show for their
              friends. It quickly blossomed into a realization that bands and
              artists have considerable barriers when wanting to support
              important non-profit work in the community. I realized that most
              musicians face the difficulty of needing to be well established in
              order to be considered for a flat rate or they are left to play a
              set for free in order to raise money for a charity. Champions of
              Hope challenges this viewpoint by providing a platform for artists
              to raise money for important causes while making money with their
              hard-earned talents. We provide a platform for not only small
              bands to do something meaningful with their music but we also give
              audiences the chance to support these important causes with every
              ticket purchase.” — Jimmy Ortiz, Founder
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/assets/aboutPage/ourStory.jpg"
              alt="Our Story"
              width={600}
              height={400}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
