import prothomAloImg from "../../assets/prothomAlo.png";

const News = () => {
  return (
    <div className="py-12 grid grid-cols-1 lg:grid-cols-3 w-11/12 lg:w-9/12 mx-auto">
      <div className="lg:col-span-1">
        <h1 className="text-5xl text-[#056049] font-semibold mb-4">News</h1>
        <p className="text-[#475467]">
          Stay informed about us with all the news we are featured in
        </p>
      </div>

      <div className="lg:col-span-2">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <img src={prothomAloImg} alt="" />
          <img src={prothomAloImg} alt="" />
          <img src={prothomAloImg} alt="" />
          <img src={prothomAloImg} alt="" />
          <img src={prothomAloImg} alt="" />
          <img src={prothomAloImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default News;
