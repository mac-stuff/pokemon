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
  width: "50%",
  backgroundColor: "#a1dae8",
});

const CustomSearch = ({ setPokemonSearch }) => {
  return (
    <AppBar position="sticky">
      <CustomToolbar>
        <CustomInputBase
          placeholder="Search"
          onChange={(event) => setPokemonSearch(event.target.value)}
        />
      </CustomToolbar>
    </AppBar>
  );
};

export default CustomSearch;
