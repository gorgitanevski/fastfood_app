import MainCon from "../features/menu/MainCon";
import AboutCon from "../features/about/AboutCon";
import ShippingCon from "../features/shoppingCart/ShippingCon";
import AccordionCon from "../layouts/AccordianCon";
import Footer from "../layouts/Footer";

const MainSection = () => {
  return (
    <div>
      <MainCon />
      <AboutCon row="row" />
      <ShippingCon />
      <AccordionCon />
      <Footer />
    </div>
  );
};

export default MainSection;
