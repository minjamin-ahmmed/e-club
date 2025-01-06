import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import eventImg from "../../assets/eventImg.png";
import { ArrowUpRight } from "@phosphor-icons/react";

const Events = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const events = [
    {
      image: eventImg,
      eventName: "E-Club Starting a Business Seminar",
      date: "21-Mar-2024",
    },
    {
      image: eventImg,
      eventName: "E-Club Starting a Business Seminar",
      date: "23-Mar-2024",
    },

    {
      image: eventImg,
      eventName: "E-Club Starting a Business Seminar",
      date: "25-Mar-2024",
    },
  ];

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-[-20%] left-[70%] lg:top-[-15%] lg:left-[80%] bg-white transform -translate-y-1/2 z-10  text-[#056049] px-4 py-2  rounded-full  hover:bg-[#056049] hover:text-white transition-all"
        onClick={onClick}
      >
        &#10094;
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-[-20%] right-[2%] lg:top-[-15%] lg:right-[2%] bg-white transform -translate-y-1/2 z-10  text-[#056049] px-4 py-2  rounded-full hover:bg-[#056049] hover:text-white transition-all"
        onClick={onClick}
      >
        &#10095;
      </button>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    swipe: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-12 bg-gradient-to-r from-[#F9FFE8] via-white to-[#E6F0EE]">
      <div className="w-11/12 lg:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="col-span-1 "
        >
          <div className="rounded-xl shadow-md p-5 bg-white">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              styles={{
                caption: {
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#ffffff",
                },
                head: { fontSize: "1rem", color: "#667085" },
                day: { fontSize: "1rem", color: "#101828" },
                today: {
                  fontWeight: "bold",
                  borderRadius: "50%",
                  backgroundColor: "#056049",
                },
                selected: { backgroundColor: "#056049", color: "white" },
              }}
            />
            {selectedDate && (
              <p className="text-center mt-4 text-[#056049]">
                {selectedDate.toDateString()}
              </p>
            )}
          </div>
        </div>

        <div className="col-span-2">
          <h1 className="text-[#056049] font-bold text-2xl lg:text-3xl">
            Upcoming Events
          </h1>
          <div className="relative mt-10">
            <Slider {...settings}>
              {events.map((event, index) => (
                <div key={index} className="px-2">
                  <div className="border border-gray-300 rounded-2xl bg-[#FCFCFD] p-2">
                    <div>
                      <img
                        className="w-full h-[200px] object-cover rounded-xl mb-2"
                        src={event.image}
                        alt=""
                      />
                    </div>

                    <div>
                      <p className="font-semibold text-xl text-[#101828] mb-1">
                        {event.eventName}
                      </p>
                      <div className="flex items-start justify-between">
                        <p className="text-[#667085] text-xl">{event.date}</p>
                        <p className="text-[#056049]">
                          <ArrowUpRight size={24} />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
