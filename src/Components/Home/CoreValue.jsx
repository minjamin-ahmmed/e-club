import { ArrowRight } from "@phosphor-icons/react";

const CoreValue = () => {
  return (
    <div className="mb-12">
      <h1 className="text-[#056049] font-bold text-center text-2xl lg:text-5xl mb-4">
        Core Values of E-Club
      </h1>
      <p className="text-center text-[#475467]">
        These core values guide the actions and initiatives of the Entrepreneurs
        Club of Bangladesh and shape its culture and community.
      </p>

      <div className="w-full p-5  lg:p-0 lg:w-11/12 lg:mx-auto my-16 flex flex-col lg:flex-row gap-5 lg:gap-0 items-center mb-16">
        <div className="group border border-[#056A50] rounded-full px-20 py-28 lg:py-20 text-center lg:translate-x-10 hover:bg-[#056A50] hover:transition-transform hover:ease-in-out hover:bg-[url('/public/Image/Image.png')] hover:bg-cover hover:bg-center">
          <h3 className="text-xl text-[#056A50] font-semibold mb-5 group-hover:text-white">
            Innovation
          </h3>
          <p className="text-[#344054] group-hover:text-white">
            The club values innovation and encourages members to think
            creatively and take risks to achieve success.
          </p>
        </div>

        <div className="group border border-[#056A50] rounded-full px-20 py-28 lg:py-20 text-center lg:-translate-x-2 hover:bg-[#056A50] hover:transition-transform hover:ease-in-out hover:bg-[url('/public/Image/Image-1.png')] hover:bg-cover hover:bg-center hover:bg-no-repeat">
          <h3 className="text-xl text-[#056A50] font-semibold mb-5 group-hover:text-white">
            Collaboration
          </h3>
          <p className="text-[#344054] group-hover:text-white">
            The club values innovation and encourages members to think
            creatively and take risks to achieve success.
          </p>
        </div>

        <div className="group border border-[#056A50] rounded-full px-20 py-28 lg:py-20 text-center lg:-translate-x-16 hover:bg-[#056A50] hover:transition-transform hover:ease-in-out hover:bg-[url('/public/Image/Image-2.png')] hover:bg-cover hover:bg-center hover:bg-no-repeat">
          <h3 className="text-xl text-[#056A50] font-semibold mb-5 group-hover:text-white">
            Empowerment
          </h3>
          <p className="text-[#344054] group-hover:text-white">
            The club values innovation and encourages members to think
            creatively and take risks to achieve success.
          </p>
        </div>

        <div className="group border border-[#056A50] rounded-full px-20 py-28 lg:py-20 text-center lg:-translate-x-28 hover:bg-[#056A50] hover:transition-transform hover:ease-in-out hover:bg-[url('/public/Image/Image-3.png')] hover:bg-cover hover:bg-center hover:bg-no-repeat">
          <h3 className="text-xl text-[#056A50] font-semibold mb-5 group-hover:text-white">
            Dedication
          </h3>
          <p className="text-[#344054] group-hover:text-white">
            The club values innovation and encourages members to think
            creatively and take risks to achieve success.
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

export default CoreValue;
