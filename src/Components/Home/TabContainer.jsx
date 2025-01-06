import { useState } from "react";
import TabAll from "./TabAll";
import TabImage from "./TabImage";
import TabVideos from "./TabVideos";

const TabContainer = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Images", "Videos"];

  return (
    <div>
      <div className="flex flex-col items-center mt-6">
        {/* Tab Buttons */}
        <div className="flex border-2 border-[#056049] rounded-full p-1 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${
                activeTab === tab
                  ? "bg-[#056049] text-white"
                  : "bg-white text-[#056049]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="w-11/12 lg:w-9/12 mx-auto mt-14">
          {activeTab === "All" && <TabAll />}
          {activeTab === "Images" && <TabImage />}
          {activeTab === "Videos" && <TabVideos />}
        </div>
      </div>
    </div>
  );
};

export default TabContainer;
