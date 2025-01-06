import nexkraft from "../../assets/nexkraft.svg";
import kodomo from "../../assets/kodomo.svg";
import medistore from "../../assets/medistore.svg";
import shairaGarden from "../../assets/shaira-garden.svg";

const Partners = () => {
  return (
    <div className="py-12">
      <h1 className="text-[#056049] font-bold text-center text-2xl lg:text-5xl mb-4">
        Our Partners
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-center w-11/12 lg:w-9/12 mx-auto gap-8 lg:gap-24">
        <div>
          <div>
            <img src={nexkraft} alt="" />
          </div>
          <h1 className="font-bold text-[#101828] text-2xl text-center">
            NexKraft Limited
          </h1>
          <p className="text-[#667085] text-center">Technology Company</p>
        </div>

        <div>
          <div>
            <img src={kodomo} alt="" />
          </div>
          <h1 className="font-bold text-[#101828] text-2xl text-center">
            KODOMO
          </h1>
          <p className="text-[#667085] text-center">Baby Care Products</p>
        </div>

        <div>
          <div>
            <img src={medistore} alt="" />
          </div>
          <h1 className="font-bold text-[#101828] text-2xl text-center">
            Baby Care Products
          </h1>
          <p className="text-[#667085] text-center">
            Online Platform Media Products
          </p>
        </div>

        <div>
          <div>
            <img src={shairaGarden} alt="" />
          </div>
          <h1 className="font-bold text-[#101828] text-2xl text-center">
            Shaira Garden
          </h1>
          <p className="text-[#667085] text-center">
            Resort & Hotel Room, Food, Swimming Company
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
