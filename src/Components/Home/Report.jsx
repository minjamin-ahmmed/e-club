import aboutUsImg from "../../assets/About Us Img CROP.png";

const Report = () => {
  return (
    <div
      className="py-12"
      style={{
        backgroundImage: `url(${aboutUsImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="lg:w-10/12 lg:mx-auto flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-10">
        <div>
          <h1 className="text-[#D92D20] font-bold text-4xl text-center">04</h1>
          <p className="text-[#1D2939] font-semibold text-center">Advisors</p>
        </div>

        <div>
          <h1 className="text-[#D92D20] font-bold text-4xl text-center">05</h1>
          <p className="text-[#1D2939] font-semibold text-center">
            Governing Body
          </p>
        </div>

        <div>
          <h1 className="text-[#D92D20] font-bold text-4xl text-center">15</h1>
          <p className="text-[#1D2939] font-semibold text-center">Ec Members</p>
        </div>

        <div>
          <h1 className="text-[#D92D20] font-bold text-4xl text-center">520</h1>
          <p className="text-[#1D2939] font-semibold text-center">
            General Members
          </p>
        </div>

        <div>
          <h1 className="text-[#D92D20] font-bold text-4xl text-center">81</h1>
          <p className="text-[#1D2939] font-semibold text-center">
            Women Entrepreneur
          </p>
        </div>

        <div>
          <h1 className="text-[#D92D20] font-bold text-4xl text-center">80</h1>
          <p className="text-[#1D2939] font-semibold text-center">
            Standing Comittee
          </p>
        </div>

        <div>
          <h1 className="text-[#D92D20] font-bold text-4xl text-center">05</h1>
          <p className="text-[#1D2939] font-semibold text-center">Projects</p>
        </div>

        <div>
          <h1 className="text-[#D92D20] font-bold text-4xl text-center">10</h1>
          <p className="text-[#1D2939] font-semibold text-center">District</p>
        </div>
      </div>
    </div>
  );
};

export default Report;
