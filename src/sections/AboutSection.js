import AboutCon from "../components/AboutCon";
import Footer from "../components/Footer";
import NavbarBg from "../components/NavbarBg";

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
