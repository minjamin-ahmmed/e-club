import { ArrowRight } from "@phosphor-icons/react";
import communityImg from "../../assets/community.png";

const Community = () => {
  return (
    <div
      className="w-11/12 lg:w-9/12 mx-auto rounded-2xl p-6 my-12"
      style={{
        backgroundImage: `url(${communityImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-white font-semibold text-2xl lg:text-6xl mb-10">
        Thrive together. Join our founder <br /> community.
      </h1>
      <div className="flex items-center justify-start mb-20">
        <button className="text-[14px] font-semibold bg-[#B7E82C] px-4 py-2 rounded-md text-[#056049]">
          <div className="flex items-center gap-2">
            <span>Join As a Member</span>
            <ArrowRight size={24} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Community;
