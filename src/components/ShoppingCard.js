import { Button, Box, Typography } from "@mui/material";
import { useMenu } from "../context/menuContext";
import ShoppingCardItem from "./ShoppingCartItem";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ShoppingCart = ({ setIsOpenShop }) => {
  const { sellectCartItem, calculateTotalCost } = useMenu();

  let content;
  if (sellectCartItem.length === 0) {
    content = (
      <div className="h-[50%] flex justify-center items-center">
        Your card is empty
      </div>
    );
  } else {
    content = (
      <div className="flex flex-col gap-5">
        {sellectCartItem.map((item) => (
          <ShoppingCardItem item={item} />
        ))}
      </div>
    );
  }

  return (
    <Box sx={{ width: "350px", height: "100%", padding: 3 }}>
      <div className="flex justify-between relative">
        <Typography variant="h5" sx={{ mb: "2rem" }}>
          My card
        </Typography>
        <IconButton
          sx={{
            position: "absolute",
            top: -3,
            right: 0,
            padding: 1,
            backgroundColor: "#ED4E53",
          }}
          onClick={() => setIsOpenShop((prev) => !prev)}
        >
          <CloseIcon />
        </IconButton>
      </div>
      {content}
      <div className="flex justify-between flex-row-reverse items-center mt-3">
        <p>
          Total cost:
          <span className="font-bold text-xl"> ${calculateTotalCost()}</span>
        </p>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#ED4E53",
            "&:hover": {
              bgcolor: "#d5464b",
            },
          }}
        >
          Check out
        </Button>
      </div>
    </Box>
  );
};

export default ShoppingCart;
