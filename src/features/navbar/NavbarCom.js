import { useState } from "react";

import NavbarItems from "./NavbarItems";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCart from "../shoppingCart/ShoppingCard";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  Box,
} from "@mui/material";

import ShoppingCartIconButton from "../shoppingCart/shoppingCartIconButton";
import { useMenu } from "../../context/menuContext";
import { ToastContainer } from "react-toastify";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

const NavbarCom = ({ className, bg }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [isOpenShop, setIsOpenShop] = useState(false);
  const { sellectCartItem } = useMenu();

  const isScreenBellow900px = useMediaQuery("(max-width:900px)");

  const handleNavbarClick = () => {
    setNavOpen(!navOpen);
  };

  const handleOpenShop = () => {
    setIsOpenShop(!isOpenShop);
  };

  return (
    <AppBar position="static" sx={{ background: bg }} className={className}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: isScreenBellow900px
            ? "space-between"
            : "space-around",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
        </Link>
        <div className="flex flex-row-reverse gap-2">
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleNavbarClick}
            sx={{ display: { sm: "block", md: "none" } }}
          >
            <MenuIcon sx={{ fontSize: "35px" }} />
          </IconButton>
          <div className="relative">
            <ShoppingCartIconButton
              sm="block"
              md="none"
              handleOpenShop={handleOpenShop}
            />

            {sellectCartItem.length > 0 && isScreenBellow900px && (
              <span className="color-white text-[12px] absolute top-0 right-[-7px] bg-[#ED4E53] rounded-full px-2 py-1">
                {sellectCartItem.length}
              </span>
            )}
            <ToastContainer toastStyle={{ borderColor: "red" }} />
          </div>

          <Drawer anchor="right" open={isOpenShop} onClose={handleOpenShop}>
            <ShoppingCart setIsOpenShop={setIsOpenShop} />
          </Drawer>

          <Drawer
            anchor="right"
            open={navOpen}
            onClose={handleNavbarClick}
            sx={{ display: { sm: "block", md: "none" } }}
          >
            <Box sx={{ width: "200px" }}>
              <List>
                <NavbarItems direction="column" />
              </List>
            </Box>
          </Drawer>
        </div>
        <List sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <NavbarItems handleOpenShop={handleOpenShop} />
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarCom;
