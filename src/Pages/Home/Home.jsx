import AboutUs from "../../Components/Home/AboutUs";
import Banner from "../../Components/Home/Banner";
import Community from "../../Components/Home/Community";
import CoreValue from "../../Components/Home/CoreValue";
import FeaturedEvent from "../../Components/Home/FeaturedEvent";
import Features from "../../Components/Home/Features";
import MarqueeContainer from "../../Components/Home/MarqueeContainer";
import Projects from "../../Components/Home/Projects";
import Report from "../../Components/Home/Report";
import SDGoal from "../../Components/Home/SDGoal";

const Home = () => {
  return (
    <div>
      <div>
        <MarqueeContainer />
        <Banner />
        <Report />
        <FeaturedEvent />
        <AboutUs />
        <CoreValue />
        <SDGoal />
        <Features />
        <Projects />
        <Community />
      </div>
    </div>
  );
};

export default Home;
