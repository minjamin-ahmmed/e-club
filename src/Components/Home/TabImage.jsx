import { img } from "motion/react-client";
import tabImage from "../../assets/tabImage.png";

const TabImage = () => {
  const allContents = [
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
    },

    {
      image: tabImage,
      heading: "E-Club EC Commerce Introduction, Dhaka 2023",
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
            <div>
              <img
                className="w-full h-56 object-cover rounded-xl"
                src={content.image}
                alt=""
              />
            </div>

            <h3 className="text-[#101828]"> {content.heading} </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabImage;
