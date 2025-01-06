import mapImg from "../../assets/Map.png";
import strongCommunity from "../../assets/strongCommunity.svg";
import experience from "../../assets/Share Experience.svg";
import emoji from "../../assets/Positive Image.svg";
const Map = () => {
  return (
    <div className="py-12 w-11/12 lg:w-9/12 mx-auto">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
        <div className="lg:w-1/2">
          <img src={mapImg} alt="" />
          <p className="text-center font-medium">
            Entrepreneurs Club Meetup Zone
          </p>
        </div>

        <div className="lg:w-1/2">
          <h1 className="text-[#101828] font-semibold text-2xl lg:text-3xl mb-14">
            The Entrepreneur Club of Bangladesh (E-Club) organizes area-based
            members meetups for several reasons:
          </h1>

          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div className="relative flex justify-center items-center 2xl:-right-8">
                <div className="relative transform rotate-45 border border-[#101828] rounded-2xl bg-white w-48 h-48 flex items-center justify-center">
                  <div className="absolute -rotate-45 w-full h-full flex flex-col items-center justify-center p-4">
                    <div className="w-16 h-16 p-4 flex items-center justify-center bg-gradient-to-r from-[#FFA4A4] to-[#FFECE7] rounded-full mb-2">
                      <img src={strongCommunity} alt="Community Icon" />
                    </div>
                    <h4 className="font-semibold text-[#FD3B84] text-lg mt text-center leading-none mb-1">
                      Build Strong <br /> Community
                    </h4>
                    <p className="text-[10px] text-[#667085] text-center mb-4">
                      To connect entrepreneurs from different parts of the
                      country and build a strong community.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex justify-center items-center -top-20 md:-top-0 lg:-top-0 xl:-top-0 2xl:-top-0 2xl:right-10">
                <div className="relative transform rotate-45 border border-[#101828] rounded-2xl bg-white w-48 h-48 flex items-center justify-center">
                  <div className="absolute -rotate-45 w-full h-full flex flex-col items-center justify-center p-4">
                    <div className="w-16 h-16 p-4 flex items-center justify-center bg-gradient-to-r from-[#462EE5] to-[#9c2ee5e7] rounded-full mb-2 ">
                      <img src={experience} alt="Community Icon" />
                    </div>
                    <h4 className="font-semibold text-[#462EE5] text-lg mt text-center mb-1 leading-none">
                      Share Experience and Learn
                    </h4>
                    <p className="text-[10px] text-[#667085] text-center mb-4">
                      To provide entrepreneurs with a platform to share their
                      experiences and learn from each othe
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center items-center -top-10">
              <div className="relative transform rotate-45 border border-[#101828] rounded-2xl bg-white w-48 h-48 flex items-center justify-center">
                <div className="absolute -rotate-45 w-full h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 p-4 flex items-center justify-center bg-gradient-to-r from-[#17A3FF] to-[#4270FF] rounded-full mb-2">
                    <img src={strongCommunity} alt="Community Icon" />
                  </div>
                  <h4 className="font-semibold text-[#4270FF] text-lg mt text-center leading-none mb-1">
                    Identify and Address the Challenges
                  </h4>
                  <p className="text-[10px] text-[#667085] text-center mb-4">
                    Identify and address faced by <br /> entrepreneurs in
                    different areas
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
              <div className="relative flex justify-center items-center -top-4 lg:-top-20 lg:left-2 2xl:left-12">
                <div className="relative transform rotate-45 border border-[#101828] rounded-2xl bg-white w-48 h-48 flex items-center justify-center">
                  <div className="absolute -rotate-45 w-full h-full flex flex-col items-center justify-center p-4">
                    <div className="w-16 h-16 p-4 flex items-center justify-center bg-gradient-to-r from-[#05603A] to-[#6CE9A6] rounded-full mb-2">
                      <img src={strongCommunity} alt="Community Icon" />
                    </div>
                    <h4 className="font-semibold text-[#05603A] text-lg mt text-center leading-none mb-1">
                      Promote Entrepreneurship
                    </h4>
                    <p className="text-[10px] text-[#667085] text-center mb-4">
                      To connect entrepreneurs from different parts of the
                      country and build a strong community.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex justify-center items-center -top-28 lg:-top-20 -left-2 2xl:-left-12">
                <div className="relative transform rotate-45 border border-[#101828] rounded-2xl bg-white w-48 h-48 flex items-center justify-center">
                  <div className="absolute -rotate-45 w-full h-full flex flex-col items-center justify-center p-4">
                    <div className="w-16 h-16 p-4 flex items-center justify-center bg-gradient-to-r from-[#FF664C] to-[#FFB324] rounded-full mb-2">
                      <img src={emoji} alt="Community Icon" />
                    </div>
                    <h4 className="font-semibold text-[#FF664C] text-lg mt text-center leading-none mb-1">
                      Create Positive Image
                    </h4>
                    <p className="text-[10px] text-[#667085] text-center mb-4">
                      To create a positive image of entrepreneurship in
                      Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
