import Image from 'next/image';

export default function TeamMembers() {
  const team = [
    {
      name: 'Caleb O Brien',
      role: 'Founder & CEO',
      description: 'Visionary leader with 15 years of industry experience driving innovation.',
      image: '/assets/teamPage/caleb.jpg',
    },
    {
      name: 'Jimmy',
      role: 'Chief Designer',
      description: 'Creative mind crafting stunning visuals for our brand.',
      image: '/assets/teamPage/jimmy.jpg',
    },
    {
      name: 'Ash',
      role: 'Lead Developer',
      description: 'Expert coder building robust and scalable solutions.',
      image: '/assets/teamPage/ash.jpg',
    },
    {
      name: 'Vaneesa',
      role: 'Marketing Head',
      description: 'Strategic thinker boosting our global presence.',
      image: '/assets/teamPage/vanessa.jpg',
    },
     {
      name: 'Rayne',
      role: 'Founder & CEO',
      description: 'Visionary leader with 15 years of industry experience driving innovation.',
      image: '/assets/teamPage/rayne.jpg',
    },
    {
      name: 'Shamus',
      role: 'Chief Designer',
      description: 'Creative mind crafting stunning visuals for our brand.',
      image: '/assets/teamPage/shamus.jpg',
    },
    
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">COH Core Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="relative group flex justify-center"
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full border-2 border-gray-700 group-hover:border-white transition-colors duration-300"

                />
              </div>
              <div className="absolute top-0 hidden group-hover:block bg-gray-900 rounded-lg p-4 w-64 text-center shadow-lg z-10 transform -translate-x-1/2 left-1/2 mt-28 md:mt-36">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-400 text-sm">{member.role}</p>
                <p className="text-gray-300 text-sm mt-2">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <Image alt='test' src={"/assets/teamPage/ash.jpg"} width={400} height={400}/> */}
      </div>
    </section>
  );
}