import { Paper, Typography, Button } from "@mui/material";
import { useMenu } from "../../context/menuContext";
import { nanoid } from "@reduxjs/toolkit";

const MenuCart = ({ item }) => {
  const { setModalItem, setIsOpenModal, addBookToCart } = useMenu();

  const handleViewMoreClick = () => {
    setModalItem(item);
    setIsOpenModal(true);
  };

  return (
    <Paper elevation={3} sx={{ width: "276px", height: "387px" }}>
      <img
        src={item.image}
        alt="main-img"
        className="h-[170px] w-[100%] flex-grow"
      />
      <div className="p-3 flex flex-col">
        <div className="flex flex-row justify-between h-[64px]">
          <Typography variant="h5">{item.name}</Typography>
          <span className="font-bold text-xl">${item.price}</span>
        </div>
        <div className="h-[70px]">
          {item.ingredients.map((ing, i) => (
            <span className="text-sm" key={nanoid()}>
              {ing}
              {i !== ing.length - 1 && ","}
            </span>
          ))}
        </div>
        <div className=" flex flex-row gap-2 items-end">
          <Button
            variant="contained"
            sx={{
              bgcolor: "#ED4E53",
              "&:hover": {
                bgcolor: "#d5464b",
              },
            }}
            onClick={() => addBookToCart(item)}
          >
            Add Card
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#ED4E53",
              color: "#ED4E53",
              transition: "all 0.4s",
              "&:hover": {
                borderColor: "#fff",
                bgcolor: "#ED4E53",
                color: "#fff",
              },
            }}
            onClick={() => handleViewMoreClick()}
          >
            View More
          </Button>
        </div>
      </div>
    </Paper>
  );
};

export default MenuCart;
