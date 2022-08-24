import { Box } from "@mui/material";
import React from "react";
import PokemonPage from "./pokemon-list/index";

const Feed = ({ userInput }) => {
  return (
    <Box flex={6} p={2}>
      <PokemonPage userInput={userInput} />
    </Box>
  );
};

export default Feed;
