import AboutUs from "../../Components/Home/AboutUs";
import Activities from "../../Components/Home/Activities";
import Banner from "../../Components/Home/Banner";
import Community from "../../Components/Home/Community";
import CoreValue from "../../Components/Home/CoreValue";

import Events from "../../Components/Home/Events";
import FeaturedEvent from "../../Components/Home/FeaturedEvent";
import Features from "../../Components/Home/Features";
import FounderMessage from "../../Components/Home/FounderMessage";
import Map from "../../Components/Home/Map";
import MarqueeContainer from "../../Components/Home/MarqueeContainer";
import MediaGallery from "../../Components/Home/MediaGallery";
import Message from "../../Components/Home/Message";
import News from "../../Components/Home/News";
import Partners from "../../Components/Home/Partners";
import Projects from "../../Components/Home/Projects";
import Report from "../../Components/Home/Report";
import SDGoal from "../../Components/Home/SDGoal";
import Shop from "../../Components/Home/Shop";

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
        <Activities />
        <Map />
        <Events />
        <Shop />
        <MediaGallery />
        <Message />
        <FounderMessage />
        <Partners />
        <News />
      </div>
    </div>
  );
};

export default Home;
