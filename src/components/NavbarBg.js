import React from "react";
import NavbarCom from "./NavbarCom";
import { Typography } from "@mui/material";
import mainImg from "../img/main.jpg";
import { useMediaQuery } from "@mui/material";

const NavbarBg = ({ heading }) => {
  const isScreenBellow500px = useMediaQuery("(max-width:500px)");

  return (
    <div
      style={{
        backgroundImage: `url(${mainImg})`,
        backgroundSize: "cover",
        height: "300px",
      }}
    >
      <NavbarCom bg="none" />
      <Typography
        variant="h2"
        sx={{
          color: "#fff",
          textAlign: "center",
          paddingTop: "5rem",
          fontSize: isScreenBellow500px ? "30px" : "52px",
        }}
      >
        {heading}
      </Typography>
    </div>
  );
};

export default NavbarBg;
