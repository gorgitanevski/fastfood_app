import { Container, Stack } from "@mui/material";
import NavbarBg from "../components/NavbarBg";
import MenuCart from "../components/MenuCart";
import Footer from "../components/Footer";

import { useFetchMenuQuery } from "../apis/menuApi";
import MenuItemClick from "../components/MenuItemClick";
import { useEffect, useState } from "react";
import { menuItems } from "../utils/contents";
import MenuItemModal from "../components/MenuItemModal";

const MenuSection = () => {
  const { data, isError, isLoading } = useFetchMenuQuery();
  const [content, setContent] = useState(null);
  const [activeItem, setActiveItem] = useState("burgers");

  useEffect(() => {
    if (data) {
      const updatedContent = data[activeItem].map((item) => (
        <MenuCart
          key={item.id}
          item={item}
          isActive={activeItem === "burgers"}
        />
      ));
      setContent(updatedContent);
    }
  }, [data, activeItem]);

  if (isError) {
    return <div>Error fatching data</div>;
  }

  if (isLoading) {
    return <div>isLoading</div>;
  }

  const handleItemClick = (items) => {
    setActiveItem(items);
  };
  return (
    <section>
      <NavbarBg heading="Our Menu" />
      <Container
        sx={{ borderTop: "1px solid black", borderBottom: "1px solid black" }}
      >
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {menuItems.map((menuItem) => (
            <MenuItemClick
              key={menuItem.type}
              name={menuItem.name}
              isActive={activeItem === menuItem.type}
              onClick={() => handleItemClick(menuItem.type)}
            />
          ))}
        </Stack>
      </Container>

      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 4,
          paddingTop: "3rem",
        }}
      >
        {content}
        <MenuItemModal />
      </Container>
      <Footer />
    </section>
  );
};

export default MenuSection;
