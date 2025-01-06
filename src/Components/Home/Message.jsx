import president from "../../assets/president.png";
import secretary from "../../assets/secretary.png";
import facebookIcon from "../../assets/facebook.svg";
import linkedinIcon from "../../assets/linkedin2.svg";
import cotation from "../../assets/cotation.png";

const Message = () => {
  return (
    <div className="py-12 w-11/12 lg:w-9/12 mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-10 lg:gap-48">
      <div className="relative">
        <h1 className="text-[#056049] font-bold text-3xl mb-8">
          President’s Message
        </h1>
        <p className="text-[#475467] text-justify mb-16">
          Assalamuwalaikum, Dear Entrepreneurs , Together, we can build a future
          where innovation knows no bounds, where dreams are transformed into
          reality, and where the entrepreneurial spirit is nurtured and
          celebrated. I look forward to an exciting journey ahead, filled with
          shared accomplishments and milestones. Thank you for being a part of
          the Entrepreneurs Club of Bangladesh. Your presence and active
          participation are what make this community truly exceptional. Here's
          to a prosperous future!
        </p>

        <div className="absolute top-12 -z-10 hidden lg:block">
          <img src={cotation} alt="" />
        </div>

        <div className="flex items-start gap-8">
          <div className="w-20 h-20">
            <img
              className="w-full h-full rounded-full flex items-center justify-center"
              src={president}
              alt=""
            />
          </div>
          <div>
            <h3 className="text-[#101828] font-semibold text-2xl mb-2">
              Dr. Mohammad Shah Alam Chowdhury
            </h3>
            <p className="text-[#667085] mb-4">President (2023-25)</p>
            <div className="flex items-center gap-6">
              <img src={facebookIcon} alt="" />
              <img src={linkedinIcon} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <h1 className="text-[#056049] font-bold text-3xl mb-8">
          General Secretary’s Message
        </h1>
        <p className="text-[#475467] text-justify mb-16">
          Distinguished Entrepreneurs, From bustling local markets to global
          business ventures, entrepreneurs have been the driving force behind
          our economic growth and development. The Entrepreneurs Club of
          Bangladesh is a testament to our commitment to nurturing and
          empowering the next generation of business leaders. Once again, I
          welcome you all to the Entrepreneurs Club of Bangladesh. Let us embark
          on this exciting journey with passion, determination, and a shared
          vision for a brighter and more prosperous future..
        </p>

        <div className="absolute top-12 -z-10 hidden lg:block">
          <img src={cotation} alt="" />
        </div>

        <div className="flex items-start gap-8">
          <div className="w-20 h-20">
            <img
              className="w-full h-full rounded-full flex items-center justify-center"
              src={secretary}
              alt=""
            />
          </div>
          <div>
            <h3 className="text-[#101828] font-semibold text-2xl mb-2">
              Biplob Ghosh Rahul
            </h3>
            <p className="text-[#667085] mb-4">General Secretary (2023-25)</p>
            <div className="flex items-center gap-6">
              <img src={facebookIcon} alt="" />
              <img src={linkedinIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
