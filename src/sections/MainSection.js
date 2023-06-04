import MainCon from "../components/MainCon";
import AboutCon from "../components/AboutCon";
import ShippingCon from "../components/ShippingCon";
import AccordianCon from "../components/AccordianCon";
import Footer from "../components/Footer";

const MainSection = () => {
  return (
    <div>
      <MainCon />
      <AboutCon row="row" />
      <ShippingCon />
      <AccordianCon />
      <Footer />
    </div>
  );
};

export default MainSection;
