import { AppBar, Switch, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

const CustomToolbar = styled(AppBar)({
  textAlign: "center",
  alignItems: "center",
  padding: "20px",
  borderRadius: "5px",
});

const Footer = ({ themeColor, setThemeColor }) => {
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked(!checked);
    setThemeColor(!themeColor);
  };

  return (
    <CustomToolbar position="sticky">
      <Typography>CHANGE APP COLOR</Typography>
      <Switch
        color={checked ? "secondary" : "primary"}
        checked={checked}
        onChange={handleChange}
      />
    </CustomToolbar>
  );
};

export default Footer;
