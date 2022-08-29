import { Box } from "@mui/material";
import React from "react";
import PokemonList from "../components/main/PokemonList";

const StagePage = ({
  fightingPokemon,
  searchedPokemon,
  currentPagePokemon,
  setCurrentPage,
  prevPage,
  nextPage,
  allPokemon,
  setSelectedPokemon,
}) => {
  return (
    <Box flex={6} p={2}>
      {fightingPokemon ? (
        <PokemonList
          searchedPokemon={searchedPokemon}
          currentPagePokemon={fightingPokemon}
          setCurrentPage={setCurrentPage}
          prevPage={prevPage}
          nextPage={nextPage}
          allPokemon={allPokemon}
          setSelectedPokemon={setSelectedPokemon}
        />
      ) : (
        <h1>No Pokemon Yet!</h1>
      )}
    </Box>
  );
};

export default StagePage;
