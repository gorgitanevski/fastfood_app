import { Container, TextField, Button, Typography } from "@mui/material";
import singUpImg from "../img/singUp.jpg";
import NavbarCom from "../features/navbar/NavbarCom";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "../layouts/Footer";

const SignUpSection = () => {
  const isScreenBellow600px = useMediaQuery("(max-width:600px)");
  const isScreenBellow400px = useMediaQuery("(max-width:400px)");

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
        <div>
          <img
            src={singUpImg}
            alt="about-igm"
            className="max-w-[449px] max-h-[641px]"
          />
        </div>

        <form className="flex flex-col gap-[1rem]">
          <Typography
            variant="h2"
            sx={{
              fontSize: isScreenBellow600px ? "30px" : "normal",
              width: isScreenBellow400px ? "100%" : "400px",
              textAlign: "center",
            }}
          >
            Sign Up
          </Typography>
          <div
            className={`flex ${
              isScreenBellow400px ? "flex-col" : "flex-row"
            } gap-3`}
          >
            <TextField variant="outlined" label="First name" size="" />
            <TextField variant="outlined" label="Last name" size="" />
          </div>
          <TextField variant="outlined" label="Username" size="" />
          <TextField variant="outlined" label="Email" type="Email" />
          <TextField variant="outlined" label="Password" type="password" />

          <Button variant="contained" sx={{ borderRadius: "30px" }}>
            Submit
          </Button>
          <div
            className={`flex ${
              isScreenBellow400px ? "flex-col gap-2" : "flex-row"
            } justify-between items-center text-sm text-[#1976d2]`}
          >
            <Link>Forgot password</Link>
            <Link to="/login">
              Already a member?<span className="font-bold"> Log In</span>
            </Link>
          </div>
        </form>
      </Container>
      <Footer />
    </div>
  );
};

export default SignUpSection;
