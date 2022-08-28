import { Grid } from "@mui/material";
import Pagination from "./Pagination";
import PokemonItem from "./PokemonItem";

const PokemonList = ({
  searchedPokemon,
  currentPagePokemon,
  setCurrentPage,
  prevPage,
  nextPage,
  allPokemon,
  setSelectedPokemon,
}) => {
  return (
    <Grid container spacing={2}>
      {searchedPokemon
        ? allPokemon
            .filter((pokemon) => pokemon.name.startsWith(searchedPokemon))
            .map((pokemon) => (
              <Grid item key={pokemon.id}>
                <PokemonItem
                  pokemon={pokemon}
                  setSelectedPokemon={setSelectedPokemon}
                />
              </Grid>
            ))
        : currentPagePokemon.map((pokemon) => (
            <Grid item key={pokemon.id}>
              <PokemonItem
                pokemon={pokemon}
                setSelectedPokemon={setSelectedPokemon}
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
