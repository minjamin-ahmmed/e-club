import { ArrowUpRight } from "@phosphor-icons/react";
import activitiesImg from "../../assets/activities.png";

const Activities = () => {
  return (
    <div className="py-12">
      <h1 className="text-[#056049] font-bold text-center text-2xl lg:text-5xl mb-4">
        E-Club’s Activities
      </h1>

      <p className="text-[#475467] text-center font-medium mb-16">
        Learn from industry experts, workshops, and networking events to expand
        your skillset and knowledge.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-11/12 lg:w-9/12 mx-auto">
        <div className="border border-[#EAFFB0] rounded-2xl p-2 bg-[#FDFFF7]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-[#101828]">
                <h3 className="font-bold text-white text-xl">01</h3>
              </div>
              <h3 className="text-[#101828] font-semibold text-lg">
                Own Market
              </h3>
            </div>

            <div>
              <ArrowUpRight size={24} />
            </div>
          </div>
          <div>
            <img className="w-full object-cover" src={activitiesImg} alt="" />
          </div>
        </div>

        <div className="border border-[#EAFFB0] rounded-2xl p-2 bg-[#FDFFF7]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-[#101828]">
                <h3 className="font-bold text-white text-xl">02</h3>
              </div>
              <h3 className="text-[#101828] font-semibold text-lg">E-Loan</h3>
            </div>

            <div>
              <ArrowUpRight size={24} />
            </div>
          </div>
          <div>
            <img className="w-full object-cover" src={activitiesImg} alt="" />
          </div>
        </div>

        <div className="border border-[#EAFFB0] rounded-2xl p-2 bg-[#FDFFF7]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-[#101828]">
                <h3 className="font-bold text-white text-xl">03</h3>
              </div>
              <h3 className="text-[#101828] font-semibold text-lg">
                Online Meetup
              </h3>
            </div>

            <div>
              <ArrowUpRight size={24} />
            </div>
          </div>
          <div>
            <img className="w-full object-cover" src={activitiesImg} alt="" />
          </div>
        </div>

        <div className="border border-[#EAFFB0] rounded-2xl p-2 bg-[#FDFFF7]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-[#101828]">
                <h3 className="font-bold text-white text-xl">04</h3>
              </div>
              <h3 className="text-[#101828] font-semibold text-lg">
                Fair Arrangement
              </h3>
            </div>

            <div>
              <ArrowUpRight size={24} />
            </div>
          </div>
          <div>
            <img className="w-full object-cover" src={activitiesImg} alt="" />
          </div>
        </div>

        <div className="border border-[#EAFFB0] rounded-2xl p-2 bg-[#FDFFF7]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-[#101828]">
                <h3 className="font-bold text-white text-xl">05</h3>
              </div>
              <h3 className="text-[#101828] font-semibold text-lg">
                Entrepreneurs Network
              </h3>
            </div>

            <div>
              <ArrowUpRight size={24} />
            </div>
          </div>
          <div>
            <img className="w-full object-cover" src={activitiesImg} alt="" />
          </div>
        </div>

        <div className="border border-[#EAFFB0] rounded-2xl p-2 bg-[#FDFFF7]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-[#101828]">
                <h3 className="font-bold text-white text-xl">06</h3>
              </div>
              <h3 className="text-[#101828] font-semibold text-lg">
                Fest Celebration
              </h3>
            </div>

            <div>
              <ArrowUpRight size={24} />
            </div>
          </div>
          <div>
            <img className="w-full object-cover" src={activitiesImg} alt="" />
          </div>
        </div>

        <div className="border border-[#EAFFB0] rounded-2xl p-2 bg-[#FDFFF7]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-[#101828]">
                <h3 className="font-bold text-white text-xl">07</h3>
              </div>
              <h3 className="text-[#101828] font-semibold text-lg">
                Skill Development
              </h3>
            </div>

            <div>
              <ArrowUpRight size={24} />
            </div>
          </div>
          <div>
            <img className="w-full object-cover" src={activitiesImg} alt="" />
          </div>
        </div>

        <div className="border border-[#EAFFB0] rounded-2xl p-2 bg-[#FDFFF7]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-[#101828]">
                <h3 className="font-bold text-white text-xl">08</h3>
              </div>
              <h3 className="text-[#101828] font-semibold text-lg">
                Mentoring
              </h3>
            </div>

            <div>
              <ArrowUpRight size={24} />
            </div>
          </div>
          <div>
            <img className="w-full object-cover" src={activitiesImg} alt="" />
          </div>
        </div>
      </div>

      <div>
        <p className="text-[#667085] text-2xl font-medium text-center mt-10 mb-6">
          And More
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-4 border border-[#F79009] rounded-[100px] py-1 pl-1 pr-4">
            <h3 className="w-12 h-12 p-2 rounded-full bg-[#F79009] text-white font-bold flex items-center justify-center">
              09
            </h3>
            <p className="text-lg font-semibold text-[#F79009]">
              Offline Training
            </p>
            <p className="text-[#F79009]">
              <ArrowUpRight size={24} />
            </p>
          </div>
          <div className="flex items-center gap-4 border border-[#FB6514] rounded-[100px] py-1 pl-1 pr-4">
            <h3 className="w-12 h-12 p-2 rounded-full bg-[#FB6514] text-white font-bold flex items-center justify-center">
              10
            </h3>
            <p className="text-lg font-semibold text-[#FB6514]">
              Business Support
            </p>
            <p className="text-[#FB6514]">
              <ArrowUpRight size={24} />
            </p>
          </div>

          <div className="flex items-center gap-4 border border-[#D92D20] rounded-[100px] py-1 pl-1 pr-4">
            <h3 className="w-12 h-12 p-2 rounded-full bg-[#D92D20] text-white font-bold flex items-center justify-center">
              11
            </h3>
            <p className="text-lg font-semibold text-[#D92D20]">Investment</p>
            <p className="text-[#D92D20]">
              <ArrowUpRight size={24} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
