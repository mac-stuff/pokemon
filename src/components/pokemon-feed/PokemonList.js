import { Grid } from "@mui/material";
import Pagination from "./Pagination";
import PokemonCard from "./PokemonCard";

const PokemonList = ({
  pokemonSearch,
  pokemonList,
  setCurrentPage,
  prevPage,
  nextPage,
  allPokemonList,
  setPokemonChoice,
}) => {
  return (
    <Grid container spacing={2}>
      {pokemonSearch
        ? allPokemonList
            .filter((pokemon) => pokemon.name.startsWith(pokemonSearch))
            .map((pokemon) => (
              <Grid item key={pokemon.id}>
                <PokemonCard
                  pokemon={pokemon}
                  setPokemonChoice={setPokemonChoice}
                />
              </Grid>
            ))
        : pokemonList.map((pokemon) => (
            <Grid item key={pokemon.id}>
              <PokemonCard
                pokemon={pokemon}
                setPokemonChoice={setPokemonChoice}
              />
            </Grid>
          ))}
      <Grid item>
        <Pagination
          setCurrentPage={setCurrentPage}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </Grid>
    </Grid>
  );
};

export default PokemonList;
