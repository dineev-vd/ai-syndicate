import Employees from "../../components/Employees/Employees";
import FavoriteStartups from "../../components/FavoriteStartups/FavoriteStartups";
import News from "../../components/News/News";
import OurProjects from "../../components/OurProjects/OurProjects";
import VerticalSlider from "../../components/VerticalSlider/VerticalSlider";

const LandingPage: React.FC = () => {
  return (
    <>
      <VerticalSlider />
      <FavoriteStartups />
      <News />
      <OurProjects />
      <Employees />
    </>
  );
};

export default LandingPage;
