import Marquee from "react-fast-marquee";

const MarqueeContainer = () => {
  const notices = [
    {
      notice:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis fuga consequatur quam adipisci voluptas sunt expedita dolores,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis fuga consequatur quam adipisci voluptas sunt expedita dolores, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis fuga consequatur quam adipisci voluptas sunt expedita dolores,",
    },
  ];

  return (
    <div className="p-2">
      <div className="flex items-center gap-2">
        <p className="text-[#101828] font-bold">Notice</p>
        <Marquee speed={50} pauseOnHover={true} gradient={false}>
          {notices.map((notice, index) => (
            <p key={index} className="mx-4">
              {notice.notice}
            </p>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeContainer;
