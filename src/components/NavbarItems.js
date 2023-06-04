import { Stack } from "@mui/material";
import ShoppingCartIconButton from "./shoppingCartIconButton";
import NavLinkCom from "./NavLinkCom";
import { useMenu } from "../context/menuContext";
import { useMediaQuery } from "@mui/material";

const NavbarItems = ({ direction, className, handleOpenShop }) => {
  const { sellectCartItem } = useMenu();
  const isScreenBellow600px = useMediaQuery("(min-width:900px)");

  return (
    <>
      <Stack
        direction="row"
        gap={3}
        sx={{
          fontWeight: "semibold",
          display: "flex",
          flexDirection: direction,
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
        }}
        className={className}
      >
        <NavLinkCom to="/">Home</NavLinkCom>
        <NavLinkCom to="/menu">Menu</NavLinkCom>
        <NavLinkCom to="/about">About</NavLinkCom>
        <NavLinkCom to="/contact">Contact</NavLinkCom>
        <NavLinkCom to="/login">Login</NavLinkCom>
        <div className="relative">
          {isScreenBellow600px && (
            <ShoppingCartIconButton
              sm="none"
              md="block"
              handleOpenShop={handleOpenShop}
            />
          )}
          {sellectCartItem.length > 0 && isScreenBellow600px && (
            <span className="color-white text-[12px] absolute top-0 right-[-7px] bg-[#ED4E53] rounded-full px-2 py-1">
              {sellectCartItem.length}
            </span>
          )}
        </div>
      </Stack>
    </>
  );
};

export default NavbarItems;
