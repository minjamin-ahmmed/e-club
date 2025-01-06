import facebookIcon from "../../assets/facebook.svg";
import linkedinIcon from "../../assets/linkedin2.svg";
import shahriyarVaiaImg from "../../assets/shahriyarVaiaImg.png";

const FounderMessage = () => {
  return (
    <div className="py-12 w-11/12 lg:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-24">
      <div className="lg:col-span-2">
        <h1 className="text-[#056049] font-bold text-3xl mb-6">
          Founder&lsquo;s Message
        </h1>
        <p className="text-[#101828] text-justify">
          <strong>Assalamuwalaikum, Dear Eclubian Entrepreneurs,</strong> <br />{" "}
          <br />
          I am delighted to welcome you all to the Entrepreneurs Club of
          Bangladesh (E-Club). As the founder and president of this club, I am
          proud to see the growing number of passionate entrepreneurs who are
          joining us on this exciting journey. <br />
          Entrepreneurship is not just a career choice, it is a way of life. It
          takes hard work, dedication, and courage to succeed as an
          entrepreneur. But when you do, the satisfaction and joy that comes
          with it is unmatched. <br /> <br />
          At the Entrepreneurs Club, we believe in creating a supportive
          community where entrepreneurs can learn from each other, share their
          experiences, and grow together. Our goal is to help entrepreneurs
          succeed by providing them with the resources and support they need,
          such as workshops, mentorship programs, and networking opportunities.{" "}
          <br /> <br /> The E-Club was founded in 2018 as a private initiative
          of collective action planning. We are excited to be a part of this
          incredible journey and to witness the amazing progress that our
          members are making. We encourage all of you to join us and take
          advantage of the opportunities that we offer. <br /> <br />
          Our dynamic and experienced EC team is ready to serve you at all
          times. Please feel free to contact them for any support. <br /> <br />
          To learn more about the Entrepreneurs Club and how you can get
          involved, please visit our website or contact us at
          query.eclub@gmail.com.
        </p>

        <h3 className="font-semibold font-xl text-[#101828] mb-4">
          Mohammad Shahriar Khan
        </h3>
        <p className="text-[#667085] mb-4">
          Founder, <br />
          Entrepreneurs Club Of Bangladesh
        </p>

        <div className="flex items-center gap-8">
          <img src={facebookIcon} alt="" />
          <img src={linkedinIcon} alt="" />
        </div>
      </div>

      <div className="lg:col-span-1">
        <img src={shahriyarVaiaImg} alt="" />
      </div>
    </div>
  );
};

export default FounderMessage;
