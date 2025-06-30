import Image from "next/image";

const TeamSection = () => {
  return (
    <section id="band" className="bg-black text-white border-b border-gray-800 py-12">
      {/* First Container: Title */}
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full md:w-10/12 lg:w-9/12 text-center mb-12">
            <div className="block-title">
              {/* <div className="block-bars mb-4">
                <Image
                  src="/assets/background_images/previousShow.jpg"
                  alt="Sound Bars"
                  width={80}
                  height={40}
                  layout="responsive"
                  className="mx-auto"
                />
              </div> */}
              <h6 className="text-sm uppercase mb-1">Champions Of Hope</h6>
              <h1 className="text-4xl md:text-5xl font-bold uppercase mb-0">
                Team Members
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Second Container: Band Members Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Member 1 */}
          <div className="block-member text-center">
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/assets/Team Members/team1.jpg"
                alt="Joe Walker"
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            <div className="member-info">
              <h4 className="text-lg uppercase mb-0">Joe Walker</h4>
              <p className="text-sm mb-0 mt-0">Lead vocals, guitars</p>
            </div>
          </div>

          {/* Member 2 */}
          <div className="block-member text-center">
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/assets/Team Members/team2.jpg"
                alt="Andrew Smith"
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            <div className="member-info">
              <h4 className="text-lg uppercase mb-0">Andrew Smith</h4>
              <p className="text-sm mb-0 mt-0">Lead guitar, bass guitar</p>
            </div>
          </div>

          {/* Member 3 */}
          <div className="block-member text-center">
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/assets/Team Members/team3.jpg"
                alt="Jeremy Anderton"
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            <div className="member-info">
              <h4 className="text-lg uppercase mb-0">Jeremy Anderton</h4>
              <p className="text-sm mb-0 mt-0">Drums, keyboards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;