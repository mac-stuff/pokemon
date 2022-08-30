import { Box } from "@mui/material";
import React from "react";
import FightingPokemonList from "../components/content/FightingPokemonList";

const StagePage = ({
  fightingPokemon,
  searchedPokemon,
  setCurrentPage,
  prevPage,
  nextPage,
  allPokemon,
  setSelectedPokemon,
}) => {
  return (
    <Box flex={6} p={2}>
      {fightingPokemon ? (
        <FightingPokemonList
          fightingPokemon={fightingPokemon}
          setSelectedPokemon={setSelectedPokemon}
        />
      ) : (
        <h1>No Pokemon Yet!</h1>
      )}
    </Box>
  );
};

export default StagePage;
