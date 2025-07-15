import React from 'react';

const MissionStatement = () => {
  return (
    <section className="pt-32 py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Mission Statement
          </span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"></span>
        </h3>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed px-4 sm:px-8 lg:px-16 transition-all duration-500 hover:text-white">
          Champions of Hope ignites change through art, unity, and the fight for fair pay.
        </p>
      </div>
    </section>
  );
};

export default MissionStatement;