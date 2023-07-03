import { useMenu } from "../../context/menuContext";
import { Modal, Paper, Typography, Button } from "@mui/material";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const MenuItemModal = () => {
  const { addBookToCart } = useMenu();

  const {
    modalItem: item,
    isOpenModal,
    setIsOpenModal,
    setModalItem,
  } = useMenu();

  const handleClose = () => {
    setIsOpenModal(false);
    setModalItem(null);
  };

  const handleAddCard = () => {
    addBookToCart(item);
    setIsOpenModal(false);
  };

  return (
    isOpenModal && (
      <Modal
        open={isOpenModal}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{ width: "276px", height: "auto", position: "relative" }}
        >
          <img
            src={item?.image}
            alt="main-img"
            className="h-[170px] w-[100%] flex-grow"
          />
          <div className="p-3 flex flex-col">
            <div className="flex flex-row justify-between h-[64px]">
              <Typography variant="h5">{item.name}</Typography>
              <span className="font-bold text-xl">${item.price}</span>
            </div>
            <div className="h-[70px]">
              {item.ingredients.map((ing) => (
                <span className="text-sm">{ing} </span>
              ))}
            </div>
            <p className="text-sm">
              loremem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <div className=" flex flex-row gap-2 items-end mt-5">
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#ED4E53",
                  "&:hover": {
                    bgcolor: "#d5464b",
                  },
                }}
                onClick={handleAddCard}
              >
                Add Card
              </Button>
              <IconButton
                sx={{
                  position: "absolute",
                  top: 3,
                  right: 3,
                  padding: 1,
                  backgroundColor: "#ED4E53",
                  color: "#fff",
                }}
                onClick={() => setIsOpenModal(false)}
              >
                <CloseIcon />
              </IconButton>
            </div>
          </div>
        </Paper>
      </Modal>
    )
  );
};

export default MenuItemModal;
