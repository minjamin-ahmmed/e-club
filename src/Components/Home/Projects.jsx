import proshar from "../../assets/Proshar.svg";
import networkBasket from "../../assets/Network Basket.png";
import mentorAcceleration from "../../assets/Mentor.png";
import vinnota from "../../assets/Vinnota.svg";
import eshop from "../../assets/E-Shop.svg";
import bondhon from "../../assets/Bondhon.svg";
import golperShuru from "../../assets/Golpoer Shuru.svg";
import { ArrowRight } from "@phosphor-icons/react";

const Projects = () => {
  return (
    <div className="my-12">
      <h1 className="text-[#056049] font-bold text-center text-2xl lg:text-5xl mb-4">
        E-Club’s Projects
      </h1>

      <p className="text-[#475467] text-center font-medium mb-16">
        Discover real-world applications of entrepreneurial ideas and the impact
        they create.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-11/12 lg:w-9/12 mx-auto mb-16">
        <div className="bg-[#FCFCFD] rounded-2xl px-10 py-20 flex items-center justify-center border border-gray-300">
          <img src={networkBasket} alt="" />
        </div>

        <div className="bg-[#FCFCFD] rounded-2xl px-10 py-20 flex items-center justify-center border border-gray-300">
          <img src={proshar} alt="" />
        </div>

        <div className="bg-[#FCFCFD] rounded-2xl px-10 py-20 flex items-center justify-center border border-gray-300">
          <img src={vinnota} alt="" />
        </div>

        <div className="bg-[#FCFCFD] rounded-2xl px-10 py-20 flex items-center justify-center border border-gray-300">
          <img src={networkBasket} alt="" />
        </div>

        <div className="bg-[#FCFCFD] rounded-2xl px-10 py-20 flex items-center justify-center border border-gray-300">
          <img src={mentorAcceleration} alt="" />
        </div>

        <div className="bg-[#FCFCFD] rounded-2xl px-10 py-20 flex items-center justify-center border border-gray-300">
          <img src={eshop} alt="" />
        </div>
        <div className="bg-[#FCFCFD] rounded-2xl px-10 py-20 flex items-center justify-center border border-gray-300">
          <img src={bondhon} alt="" />
        </div>

        <div className="bg-[#FCFCFD] rounded-2xl px-10 py-20 flex items-center justify-center border border-gray-300">
          <img src={golperShuru} alt="" />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button className="text-[14px] font-semibold text-white bg-[#056049] px-4 py-2 rounded-md">
          <div className="flex items-center gap-2">
            <span>More Projects</span>
            <ArrowRight size={24} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Projects;
