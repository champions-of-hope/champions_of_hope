import { FaBullhorn, FaSearch, FaBalanceScale, FaHandshake, FaMoneyCheckAlt, FaUsersCog } from 'react-icons/fa';

const coreValues = [
  {
    icon: FaBullhorn,
    title: 'Accessible Activism',
    description: 'Every ticket, every step — it all adds up to real change.',
  },
  {
    icon: FaSearch,
    title: 'Transparency',
    description: 'We keep it real about our work, our money, and our mission.',
  },
  {
    icon: FaBalanceScale,
    title: 'Integrity',
    description: 'We do what we say, even when no one’s watching.',
  },
  {
    icon: FaHandshake,
    title: 'Collaboration Over Competition',
    description: 'We lift each other up because there’s enough for everyone.',
  },
  {
    icon: FaMoneyCheckAlt,
    title: 'Fair Pay for Meaningful Work',
    description: 'Doing good should never mean going broke.',
  },
  {
    icon: FaUsersCog,
    title: 'Unity',
    description: 'We create together, rise together, and move as one.',
  },
];

const CoreValues = () => {
  return (
    <section className="lg:pt-20 py-12 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-10 sm:mb-12">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              role="region"
              aria-labelledby={`value-title-${index}`}
            >
              <value.icon
                className="text-4xl text-blue-400 mb-4"
                aria-hidden="true"
              />
              <h3
                id={`value-title-${index}`}
                className="text-xl font-semibold text-white mb-2"
              >
                {value.title}
              </h3>
              <p className="text-gray-300 text-base">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;