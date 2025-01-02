import networking from "../../assets/networking.svg";
import businessDev from "../../assets/Business.svg";
import brand from "../../assets/brand.svg";
import accessFunding from "../../assets/access.svg";
import industry from "../../assets/industry.svg";
import community from "../../assets/community.svg";
import { ArrowRight } from "@phosphor-icons/react";

const Features = () => {
  return (
    <div className="bg-gradient-to-r from-[#F8FFE7] to-[#E6F0EE] py-12">
      <h1 className="text-[#056049] font-bold text-center text-2xl lg:text-5xl mb-4">
        Features & Benefits
      </h1>

      <p className="text-[#475467] text-center font-medium mb-16">
        The Entrepreneurs Club of Bangladesh (E-Club) is a community of business
        owners, entrepreneurs, and professionals in Bangladesh. Here being part
        of the Entrepreneurs Club of Bangladesh unlocks some potential benefits
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-11/12 lg:w-9/12 mx-auto mb-16">
        <div className="bg-white rounded-2xl p-4">
          <div className="flex items-center gap-4 mb-4">
            <div>
              <img
                className="w-14 h-auto object-contain"
                src={networking}
                alt=""
              />
            </div>

            <h4 className="font-bold text-xl">Networking Opportunities</h4>
          </div>
          <p className="text-[#667085]">
            One of the most significant benefits of being part of ECB is the
            opportunity to network with other entrepreneurs and business owners.
            This can help you build relationships, find potential customers, and
            get advice and support from other members.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4">
          <div className="flex items-center gap-4 mb-4">
            <div>
              <img
                className="w-14 h-auto object-contain"
                src={businessDev}
                alt=""
              />
            </div>

            <h4 className="font-bold text-xl">Business Development</h4>
          </div>
          <p className="text-[#667085]">
            Being part of E-Club can provide you with access to resources and
            tools that can help you develop and grow your business. This can
            include workshops, training sessions, mentorship, and other learning
            opportunities.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4">
          <div className="flex items-center gap-4 mb-4">
            <div>
              <img className="w-14 h-auto object-contain" src={brand} alt="" />
            </div>

            <h4 className="font-bold text-xl">Brand Exposure</h4>
          </div>
          <p className="text-[#667085]">
            Being part of E-Club can increase your brand exposure and
            visibility. This can help you attract new customers and clients, and
            build your reputation in your industry.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4">
          <div className="flex items-center gap-4 mb-4">
            <div>
              <img
                className="w-14 h-auto object-contain"
                src={accessFunding}
                alt=""
              />
            </div>

            <h4 className="font-bold text-xl">Access to Funding</h4>
          </div>
          <p className="text-[#667085]">
            E-Club can connect you with potential investors and help you secure
            funding for your business. This can be particularly helpful if you
            are looking to expand your business or launch a new venture.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4">
          <div className="flex items-center gap-4 mb-4">
            <div>
              <img
                className="w-14 h-auto object-contain"
                src={industry}
                alt=""
              />
            </div>

            <h4 className="font-bold text-xl">Industry Insights</h4>
          </div>
          <p className="text-[#667085]">
            E-Club can provide you with valuable insights into your industry and
            market trends. This can help you stay informed about the latest
            developments in your field and identify new opportunities for growth
            and innovation.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4">
          <div className="flex items-center gap-4 mb-4">
            <div>
              <img
                className="w-14 h-auto object-contain"
                src={community}
                alt=""
              />
            </div>

            <h4 className="font-bold text-xl">Community Support</h4>
          </div>
          <p className="text-[#667085]">
            Finally, being part of E-Club can provide you with a sense of
            community and support. You can connect with other entrepreneurs who
            understand the challenges and rewards of running a business, and get
            the support and encouragement you need to succeed.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button className="text-[14px] font-semibold text-white bg-[#056049] px-4 py-2 rounded-md">
          <div className="flex items-center gap-2">
            <span>Join As a Member</span>
            <ArrowRight size={24} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Features;
