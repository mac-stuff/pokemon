import styled from "@emotion/styled";
import { AppBar, InputBase, Toolbar } from "@mui/material";
import React from "react";

const CustomToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "center",
});

const CustomInputBase = styled(InputBase)({
  padding: "5px",
  border: "1px solid #C7C7CD",
  borderRadius: "5px",
  width: "40%",
});

const CustomSearch = () => {
  return (
    <AppBar position="sticky">
      <CustomToolbar>
        <CustomInputBase placeholder="Search"/>
      </CustomToolbar>
    </AppBar>
  );
};

export default CustomSearch;
