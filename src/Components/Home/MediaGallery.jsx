import TabContainer from "./TabContainer";

const MediaGallery = () => {
  return (
    <div className="py-12">
      <h1 className="text-[#056049] font-bold text-center text-2xl lg:text-5xl mb-4">
        E-Club Media Gallery
      </h1>

      <p className="text-[#475467] text-center font-medium mb-16">
        Show your E-Club pride with exclusive merchandise designed for
        entrepreneurs like you.
      </p>

      <div>
        <TabContainer />
      </div>
    </div>
  );
};

export default MediaGallery;
