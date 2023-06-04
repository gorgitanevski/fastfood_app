import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  MainSection,
  MenuSection,
  AboutSection,
  ContactSection,
  SignUpSection,
} from "./sections";
import { IoMdCall } from "react-icons/io";
import { Button, Stack } from "@mui/material";
import LoginSection from "./sections/LoginSection";

const App = () => {
  return (
    <div>
      <Stack
        direction="row"
        sx={{
          backgroundColor: "#1D2228",
          justifyContent: "space-around",
        }}
      >
        <div style={{ color: "#fff", display: "flex", alignItems: "center" }}>
          <IoMdCall color="white" fontSize={20} />
          <p className="pt-3">02277873588</p>
        </div>
        <Link to="/menu">
          {" "}
          <Button
            variant="contained"
            sx={{
              bgcolor: "#ED4E53",
              "&:hover": {
                bgcolor: "#d5464b",
              },
            }}
          >
            Order Online
          </Button>
        </Link>
      </Stack>
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/menu" element={<MenuSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/login" element={<LoginSection />} />
        <Route path="/sign" element={<SignUpSection />} />
      </Routes>
    </div>
  );
};

export default App;
