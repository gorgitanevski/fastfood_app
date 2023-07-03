import React from "react";
import ShippingConCard from "./ShippingConCard";
import { Container } from "@mui/material";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";

const ShippingCon = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        gap: 2,
        paddingBottom: "9rem",
      }}
    >
      <ShippingConCard icon={<LocalShippingOutlinedIcon fontSize="large" />} />
      <ShippingConCard icon={<PeopleOutlineIcon fontSize="large" />} />
      <ShippingConCard icon={<CreditCardOutlinedIcon fontSize="large" />} />
    </Container>
  );
};

export default ShippingCon;
