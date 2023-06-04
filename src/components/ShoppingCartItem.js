import { Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useMenu } from "../context/menuContext";
import DeleteIcon from "@mui/icons-material/Delete";

const ShoppingCardItem = ({ item }) => {
  const { removeItemFromCard, handleQuantityChange } = useMenu();
  const { quantity, price, image } = item;

  const handleClickInc = () => {
    const newQuantity = quantity + 1;

    handleQuantityChange(item.id, newQuantity);
  };

  const handleClickDec = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;

      handleQuantityChange(item.id, newQuantity);
    } else {
      removeItemFromCard(item.id);
    }
  };

  return (
    <div className="flex flex-col border-b-2 pb-3">
      <div className="flex flex-row justify-between items-center gap-3 mb-3">
        <img
          src={image}
          alt="cardimage"
          className="w-[70px] h-[70px] rounded-full"
        />
        <Typography variant="subtitle1">{item.name}</Typography>
        <span
          onClick={() => removeItemFromCard(item.id)}
          className="cursor-pointer"
        >
          <DeleteIcon />
        </span>
      </div>
      <div className="flex justify-between items-center">
        <div className="border-[#999] border-2 py-1 px-3 rounded-[15px] flex gap-3 justify-between items-center">
          <span S onClick={handleClickInc} className="cursor-pointer">
            <AddIcon fontSize="small" />
          </span>
          <span className="font-bold text-xl">{quantity}</span>
          <span onClick={handleClickDec} className="cursor-pointer">
            <RemoveIcon fontSize="small" />
          </span>
        </div>

        <span className="mb-3">${price * quantity}</span>
      </div>
    </div>
  );
};

export default ShoppingCardItem;
