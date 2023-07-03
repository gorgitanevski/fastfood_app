import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";

const ShoppingCartIconButton = ({ sm, md, handleOpenShop }) => {
  return (
    <IconButton
      edge="end"
      color="inherit"
      aria-label="menu"
      onClick={handleOpenShop}
      sx={{ display: { sm: sm, md: md } }}
    >
      <ShoppingCartIcon sx={{ fontSize: "35px" }} />
    </IconButton>
  );
};

export default ShoppingCartIconButton;
