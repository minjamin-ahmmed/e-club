import {
  EnvelopeSimple,
  FacebookLogo,
  LinkedinLogo,
  WhatsappLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import aboutUsImg from "../../assets/About Us Img.png";

const AboutUs = () => {
  return (
    <div
      className="my-8  lg:my-12 p-8 rounded-xl "
      style={{
        backgroundImage: `url(${aboutUsImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full p-5  lg:p-0 lg:w-8/12 lg:mx-auto">
        <h1 className="text-5xl font-bold text-[#056049] mb-14">About Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-14">
          <div className="p-4 lg:p-0 lg:pr-8 lg:border-r lg:border-[#98A2B3]">
            <h3 className="text-[#101828] font-semibold text-xl">
              Entrepreneurs Club of Bangladesh 4
            </h3>
            <p className="text-justify text-[#475467]">
              Founded in 2018 and registered with RJSC, the Entrepreneurs Club
              of Bangladesh is a non-profit organization dedicated to empowering
              entrepreneurs across the country. Through resource provision,
              networking opportunities, and ongoing support, the club helps
              aspiring and established entrepreneurs build and grow thriving
              businesses.
            </p>
          </div>

          <div className="p-4 lg:pr-8 lg:py-0 lg:border-r lg:border-[#98A2B3]">
            <h3 className="text-[#101828] font-semibold text-xl">
              Our Mission
            </h3>
            <p className="text-justify text-[#475467]">
              The Entrepreneurs Club of Bangladesh supports entrepreneurs by
              providing a network for collaboration and growth, fostering new
              ventures and member connections.
            </p>
          </div>

          <div className="p-4 lg:pr-8 lg:py-0 lg:border-r lg:border-[#98A2B3]">
            <h3 className="text-[#101828] font-semibold text-xl">Our Vision</h3>
            <p className="text-justify text-[#475467]">
              The Entrepreneurs Club of Bangladesh envisions a thriving
              ecosystem empowering entrepreneurs and fostering economic
              development.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <p className="bg-[#044B39] rounded-full text-white p-1">
            <FacebookLogo size={24} />
          </p>
          <p className="bg-[#044B39] rounded-full text-white p-1">
            <LinkedinLogo size={24} />
          </p>
          <p className="bg-[#044B39] rounded-full text-white p-1">
            <YoutubeLogo size={24} />
          </p>
          <p className="bg-[#044B39] rounded-full text-white p-1">
            <EnvelopeSimple size={24} />
          </p>
          <p className="bg-[#044B39] rounded-full text-white p-1">
            <WhatsappLogo size={24} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
