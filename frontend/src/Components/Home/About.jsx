import Banner from "./banner";
import Lanpro from "./Lanpro";
import "./css/About.css";
import LatestBlog from "./LatestBlog";
import Skills from "./skills";
import Info from "./info";
const About = () => {

  return (
    <div className="Home">
      <Banner />
      {/* <LatestBlog/> */}
      <Info/>
      {/* <Lanpro /> */}
      <Skills/>
    </div>
  );
};

export default About;
