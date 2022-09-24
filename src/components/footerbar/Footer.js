import { AppBar, Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

const CustomToolbar = styled(AppBar)({
  textAlign: "center",
  alignItems: "center",
  padding: "20px",
  borderRadius: "5px",
});

const Footer = ({ themeColor, setThemeColor }) => {
  return (
    <CustomToolbar position="sticky">
      <Button
        variant="contained"
        color="primary"
        onClick={() => setThemeColor(!themeColor)}
      >
        CHANGE COLOR
      </Button>
    </CustomToolbar>
  );
};

export default Footer;
