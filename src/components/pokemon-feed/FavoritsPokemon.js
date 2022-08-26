import { Grid } from "@mui/material";
import React from "react";
import PokemonCard from "./PokemonCard";

const FavoritsPokemon = ({ favoritePokemon }) => {
  return (
    <Grid item key={pokemon.id}>
      <PokemonCard pokemon={pokemon} setPokemonChoice={setPokemonChoice} />
    </Grid>
  );
};

export default FavoritsPokemon;
