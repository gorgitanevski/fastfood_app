import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { ListItem, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer className="h-[100%] bg-[#121212] flex sm:flex-col flex-row justify-around text-white items-center color-white mt-3">
      <div className="flex flex-col gap-1">
        <h4>Logo</h4>
        <p>Info@info.com</p>
        <p>phone: 00022737282</p>
      </div>
      <div className="flex flex-col text-center gap-2">
        <Typography variant="h6">Customer service</Typography>
        <Stack direction="column">
          <ListItem>Help Center</ListItem>
          <ListItem>Buyer Protection</ListItem>
          <ListItem>Take our feedback survey</ListItem>
        </Stack>
      </div>
      <div>
        <p>3002 Buena Vista Avenue</p>
        <div className="text-[30px] flex gap-3">
          <FacebookIcon />
          <InstagramIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
