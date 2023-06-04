import mainImg from "../img/main-1.jpg";
import NavbarCom from "../components/NavbarCom";
import { Button, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

const MainCon = () => {
  const isScreenBellow600px = useMediaQuery("(max-width:600px)");

  return (
    <div
      style={{
        backgroundImage: `url(${mainImg})`,
        height: "95vh",
        backgroundSize: "cover",
        position: "relative",
        zIndex: 2,
      }}
      className="psudo-class"
    >
      <NavbarCom bg="none" />
      <div
        style={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: -1,
        }}
      />
      <div
        className={`flex flex-col justify-center items-center ${
          isScreenBellow600px ? "mt-[3rem]" : "mt-[11rem]"
        }  gap-3`}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 800,
            fontSize: isScreenBellow600px ? "40px" : "56px",
            lineHeight: " 68px",
            color: "#fff",
            padding: isScreenBellow600px ? "15px" : "0",
          }}
        >
          ITALIANS PIZZA MADE <br /> TO PERFECTION
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 300,
            fontSize: isScreenBellow600px ? "19px" : "24px",
            lineHeight: "29px",
            color: " #FFFFFF",
            textAlign: "center",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing <br /> and
          typesetting industry.
        </Typography>
        <Link to="/menu">
          <Button
            variant="contained"
            sx={{
              bgcolor: "#ED4E53",
              "&:hover": {
                bgcolor: "#d5464b",
              },
            }}
          >
            VIEW MENU
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MainCon;
