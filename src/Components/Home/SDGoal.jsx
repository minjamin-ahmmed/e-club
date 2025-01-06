import genderEquility from "../../assets/Gender Equality Icon.png";
import growth from "../../assets/Growth.png";
import sustainableCity from "../../assets/Sustainable Cities.png";
import goal from "../../assets/Goal Icon Container.png";

const SDGoal = () => {
  return (
    <div className="my-12">
      <div className="relative">
        <h1 className="text-[#056049] font-bold text-center text-2xl lg:text-5xl mb-24">
          Our SDG Goal
        </h1>
        <div className="absolute hidden lg:block -bottom-16 left-[38%]">
          <img src={goal} alt="" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-11/12 lg:w-8/12 mx-auto">
        <div>
          <div className="p-4 bg-gradient-to-r from-purple-800 to-[#DBA1FC] rounded-2xl">
            <div className="flex items-center justify-between">
              <div className="mb-4">
                <img
                  className="w-16 h-16 object-contain"
                  src={genderEquility}
                  alt=""
                />
              </div>

              <h1 className="text-purple-800 font-extrabold text-4xl">05</h1>
            </div>

            <div>
              <h4 className="font-bold text-white text-lg mb-4">
                Gender Equality
              </h4>
              <p className="text-[#FCFCFD]">
                Achieve gender equality and empower all women and girls
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="p-4 bg-gradient-to-r from-blue-800 to-[#43C5FF] rounded-2xl">
            <div className="flex items-center justify-between">
              <div className="mb-4">
                <img className="w-16 h-16 object-contain" src={growth} alt="" />
              </div>

              <h1 className="text-blue-800 font-extrabold text-4xl">08</h1>
            </div>

            <div>
              <h4 className="font-bold text-white text-lg mb-4">
                Decent Work and Economic Growth
              </h4>
              <p className="text-[#FCFCFD]">
                Promote sustained inclusive and sustainable economic growth and
                productive employment
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="p-4 bg-gradient-to-r from-[#05603A] to-[#40F996] rounded-2xl">
            <div className="flex items-center justify-between">
              <div className="mb-4">
                <img
                  className="w-16 h-16 object-contain"
                  src={sustainableCity}
                  alt=""
                />
              </div>

              <h1 className="text-[#05603A] font-extrabold text-4xl">11</h1>
            </div>

            <div>
              <h4 className="font-bold text-white text-lg mb-4">
                Sustainable Cities and Communities
              </h4>
              <p className="text-[#FCFCFD]">
                Maka cities and human settlements inclusive, safe, resilient and
                sustainable
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SDGoal;
