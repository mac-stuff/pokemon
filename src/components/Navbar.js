import styled from "@emotion/styled";
import { CatchingPokemon } from "@mui/icons-material";
import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography sx={{ display: { xs: "none", sm: "block" } }}>
          Pokedex
        </Typography>
        <CatchingPokemon
          sx={{ display: { xs: "block", sm: "none" } }}
        ></CatchingPokemon>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
