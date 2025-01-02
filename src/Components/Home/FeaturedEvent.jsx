import featuredImg from "../../assets/CTA bg Img.png";
import startUpImg from "../../assets/startUp.png";
import digitalImg from "../../assets/Marketing.png";
import { ArrowRight } from "@phosphor-icons/react";
const FeaturedEvent = () => {
  return (
    <div
      className="my-8  lg:my-12 p-8 rounded-xl w-full lg:w-8/12 lg:mx-auto"
      style={{
        backgroundImage: `url(${featuredImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col lg:flex-row items-start gap-16">
        <div className="lg:w-1/2">
          <div className="flex items-center gap-6">
            <div>
              <div>
                <img className="rounded-t-xl" src={startUpImg} alt="" />
              </div>
              <div className="bg-white p-2 rounded-b-xl">
                <h3 className="text-[#101828] font-bold mb-4">
                  E-Club’s Startup Pitch Competition
                </h3>
                <div className="flex items-center justify-between">
                  <p>24-07-24</p>
                  <p>2 days event</p>
                </div>
              </div>
            </div>

            <div>
              <div>
                <img className="rounded-t-xl" src={digitalImg} alt="" />
              </div>
              <div className="bg-white p-2 rounded-b-xl">
                <h3 className="text-[#101828] font-bold mb-4">
                  E-Club’s Startup Pitch Competition
                </h3>
                <div className="flex items-center justify-between">
                  <p>24-07-24</p>
                  <p>2 days event</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-white mb-12">
            Join our featured Events and get connected with Entreprenuers
          </h1>
          <div>
            <button className="text-[14px] font-semibold text-white bg-[#D92D20] px-4 py-2 rounded-md">
              <div className="flex items-center gap-2">
                <span>More Events</span>
                <ArrowRight size={24} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedEvent;
