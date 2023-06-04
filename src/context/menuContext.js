import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const MenuContext = createContext();

export const useMenu = () => {
  return useContext(MenuContext);
};

const MenuProvider = ({ children }) => {
  const [sellectCartItem, setSellectCartItem] = useState([]);
  const [modalItem, setModalItem] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const addModalItem = (item) => {
    setModalItem(item);
    setIsOpenModal(true);
  };

  const addBookToCart = (menuItem) => {
    toast.success(`Added "${menuItem.name}" to Card`);
    const existingItem = sellectCartItem.find(
      (item) => item.id === menuItem.id
    );

    if (existingItem) {
      setSellectCartItem((prevItems) =>
        prevItems.map((item) =>
          item.id === menuItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setSellectCartItem((prevItems) => [
        ...prevItems,
        { ...menuItem, quantity: 1 },
      ]);
    }
  };

  const removeItemFromCard = (coffeId) => {
    const updatedItems = sellectCartItem.filter((item) => item.id !== coffeId);
    setSellectCartItem(updatedItems);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedItems = sellectCartItem.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setSellectCartItem(updatedItems);
    onTotalCostChange();
  };

  const onTotalCostChange = () => {
    const total = calculateTotalCost();
    console.log("Total Cost:", total);
  };

  const calculateTotalCost = () => {
    let total = 0;
    sellectCartItem.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total;
  };

  const valueToShare = {
    addBookToCart,
    sellectCartItem,
    setSellectCartItem,
    modalItem,
    setModalItem,
    addModalItem,
    isOpenModal,
    setIsOpenModal,
    removeItemFromCard,
    handleQuantityChange,
    calculateTotalCost,
  };

  return (
    <MenuContext.Provider value={valueToShare}>{children}</MenuContext.Provider>
  );
};

export { MenuProvider };
export default MenuContext;
