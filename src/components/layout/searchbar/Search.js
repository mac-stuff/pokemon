import styled from "@emotion/styled";
import { AppBar, InputBase, Toolbar } from "@mui/material";
import React from "react";

const CustomToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "center",
});

const CustomInputBase = styled(InputBase)({
  padding: "5px",
  border: "1px solid #3b3a30",
  borderRadius: "5px",
  width: "50%",
  backgroundColor: "#b2c2bf",
});

const Search = ({ setSearchedPokemon }) => {
  return (
    <AppBar position="sticky">
      <CustomToolbar>
        <CustomInputBase
          placeholder="Search"
          onChange={(event) => setSearchedPokemon(event.target.value)}
        />
      </CustomToolbar>
    </AppBar>
  );
};

export default Search;
