import AboutCon from "../features/about/AboutCon";

import Footer from "../layouts/Footer";
import NavbarBg from "../features/navbar/NavbarBg";

const AboutSection = () => {
  return (
    <section>
      <NavbarBg heading="About Us" />

      <AboutCon row="row-reverse" />
      <Footer />
    </section>
  );
};

export default AboutSection;
