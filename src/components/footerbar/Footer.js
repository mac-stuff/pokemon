import { AppBar, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const CustomToolbar = styled(AppBar)({
  textAlign: "center",
  alignItems: "center",
  padding: "10px",
  borderRadius: "5px",
});

const Footer = () => {
  return (
    <CustomToolbar position="sticky">
      <Typography>Pokemon 2022</Typography>
    </CustomToolbar>
  );
};

export default Footer;
