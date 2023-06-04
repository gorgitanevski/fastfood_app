import { Container, TextField, Button, Typography } from "@mui/material";
import ContactImg from "../img/contactUs.jpg";
import NavbarCom from "../components/NavbarCom";
import { useMediaQuery } from "@mui/material";
import ContentImgBg from "../components/ContentImgBg";
import Footer from "../components/Footer";

const ContactSection = () => {
  const isScreenBellow600px = useMediaQuery("(max-width:600px)");

  return (
    <div>
      <NavbarCom />
      <Container
        sx={{
          display: "flex",
          flexDirection: isScreenBellow600px ? "column-reverse" : "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          mt: isScreenBellow600px ? "3rem" : "7rem",
        }}
      >
        <div className="relative">
          <img
            src={ContactImg}
            alt="about-igm"
            className="max-w-[449px] max-h-[641px]"
          />
          <ContentImgBg />
        </div>

        <form className="flex flex-col gap-[1rem]">
          <Typography
            variant="h2"
            sx={{ fontSize: isScreenBellow600px ? "30px" : "normal" }}
          >
            Sent Us A Message
          </Typography>
          <TextField variant="outlined" label="Name" size="" />
          <TextField variant="outlined" label="Email" type="email" />
          <TextField variant="outlined" label="Subject" />
          <TextField
            variant="outlined"
            label="Write Message..."
            multiline="true"
            rows={3}
          />
          <Button variant="contained" sx={{ alignSelf: "end" }}>
            Sent
          </Button>
        </form>
      </Container>
      <Footer />
    </div>
  );
};

export default ContactSection;
