import { Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const MenuItemClick = ({ onClick, name, isActive }) => {
  const isScreenBellow400px = useMediaQuery("(max-width:400px)");

  return (
    <Typography
      variant="h4"
      sx={{
        color: isActive ? "#ED4E53" : "black",
        fontSize: isScreenBellow400px ? "18px" : "30px",
        fontWeight: "700",
        lineHeight: "54px",
        cursor: "pointer",
        "&:hover": {
          color: "#ED4E53",
        },
      }}
      onClick={onClick}
    >
      {name}
    </Typography>
  );
};

export default MenuItemClick;
