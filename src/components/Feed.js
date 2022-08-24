import { Box } from "@mui/material";
import React from "react";
import PokemonPage from "./pokemon-list/index";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <PokemonPage />
    </Box>
  );
};

export default Feed;
