import { ArrowRight } from "@phosphor-icons/react";
import bannerImg from "../../assets/bannerImage.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  const images = [bannerImg, bannerImg, bannerImg];

  return (
    <div className="w-11/12 mx-auto py-5 md:py-10 lg:py-12 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-20">
      <div className="lg:w-1/2">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={false}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt=""
                className="w-full h-auto object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="lg:w-1/2 space-y-5 lg:space-y-10">
        <h1 className="text-[#101828] text-2xl md:text-4xl lg:text-6xl font-bold">
          To make a better future get{" "}
          <span className="text-[#056049]">E-Club</span> Membership Certificate.
        </h1>
        <p className="text-[#667085] text-justify">
          The Entrepreneurs Club of Bangladesh (E-Club) is a community of
          business owners, entrepreneurs, and professionals in Bangladesh. The
          Entrepreneurs Club of Bangladesh (E-Club) is a community of business
          owners, entrepreneurs, and professionals in Bangladesh. The
          Entrepreneurs Club of Bangladesh (E-Club) is a community of business
          owners, entrepreneurs, and professionals in Bangladesh. The
          Entrepreneurs Club of Bangladesh (E-Club) is a community of business
          owners, entrepreneurs, and professionals in Bangladesh.
        </p>
        <div className="flex items-center justify-end">
          <Link to="/joinAsMember">
            <button className="text-[14px] font-semibold text-white bg-[#056049] px-4 py-2 rounded-md">
              <div className="flex items-center gap-2">
                <span>Join As a Member</span>
                <ArrowRight size={24} />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
