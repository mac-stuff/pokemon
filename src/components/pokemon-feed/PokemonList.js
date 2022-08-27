import { Grid } from "@mui/material";
import Pagination from "./Pagination";
import PokemonCard from "./PokemonCard";

const PokemonList = ({
  searchedPokemon,
  pokemonList, 
  setCurrentPage,
  prevPage,
  nextPage,
  allPokemonList,
  setPokemonChoice,
}) => {
  return (
    <Grid container spacing={2}>
      {searchedPokemon
        ? allPokemonList
            .filter((pokemon) => pokemon.name.startsWith(searchedPokemon))
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
