import Image from 'next/image';

export default function Jars() {
  return (
    <section className="bg-black py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-[4000px] h-[400px] relative">
            <Image
              src="/assets/AudioFilesSection/JARS_group.jpg" // Replace with actual image path
              alt="Team Member"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-4">JARS</h2>
            <p className="text-lg leading-relaxed">
              John Doe is the lead guitarist of the band, bringing electrifying riffs and soulful solos to the stage. 
              With over a decade of experience, John has toured internationally, blending classic rock with modern flair. 
              When not shredding on his guitar, he enjoys songwriting and mentoring young musicians.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}