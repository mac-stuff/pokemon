import { Box } from "@mui/material";
import React from "react";
import PokemonPage from "./pokemon-feed/index";

const Feed = ({ selectedPage, pokemonSearch }) => {
  return (
    <Box flex={6} p={2}>
      <PokemonPage selectedPage={selectedPage} pokemonSearch={pokemonSearch} />
    </Box>
  );
};

export default Feed;
