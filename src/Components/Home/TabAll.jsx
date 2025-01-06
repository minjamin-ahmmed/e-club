import { img } from "motion/react-client";
import tabImage from "../../assets/tabImage.png";

const TabAll = () => {
  const allContents = [
    {
      image: tabImage,
      heading: "E-Club EC Commerce Introduction, Dhaka 2023",
    },

    {
      image: tabImage,
      heading: "E-Club EC Commerce Introduction, Dhaka 2023",
      URL: "https://www.youtube.com/watch?v=gzzRFU8CcG8",
    },

    {
      image: tabImage,
      heading: "E-Club EC Commerce Introduction, Dhaka 2023",
    },

    {
      image: tabImage,
      heading: "E-Club EC Commerce Introduction, Dhaka 2023",
    },

    {
      image: tabImage,
      heading: "E-Club EC Commerce Introduction, Dhaka 2023",
      URL: "https://www.youtube.com/watch?v=gzzRFU8CcG8",
    },

    {
      image: tabImage,
      heading: "E-Club EC Commerce Introduction, Dhaka 2023",
    },

    {
      image: tabImage,
      heading: "E-Club EC Commerce Introduction, Dhaka 2023",
      URL: "https://www.youtube.com/watch?v=gzzRFU8CcG8",
    },

    {
      image: tabImage,
      heading: "E-Club EC Commerce Introduction, Dhaka 2023",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {allContents.map((content, index) => (
        <div key={index}>
          <div className="mb-2">
            {content.URL ? (
              <iframe
                className="w-full h-56 rounded-xl"
                src="https://www.youtube.com/embed/5p_SuO96Jd4?si=9KI3x5v2i5gy01u4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            ) : (
              <div>
                <img
                  className="w-full h-56 object-cover rounded-xl"
                  src={content.image}
                  alt=""
                />
              </div>
            )}
            <h3 className="text-[#101828]"> {content.heading} </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabAll;
