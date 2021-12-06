import React from "react";
import Button from "@mui/material/Button";
import "./button.module.css";

const ButtonComponent = () => {
  return (
    <Button
      variant="contained"
      href="#main"
      style={{
        backgroundColor: "#1674a0",
        padding: "10px 35px",
        fontSize: "16px",
      }}
    >
      Discover
    </Button>
  );
};

export default ButtonComponent;
