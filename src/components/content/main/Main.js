import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PokemonItem from "./PokemonItem";
import Pagination from "./Pagination";

const CustomLink = styled(Link)({
  textDecoration: "none",
});

const Main = ({
  currentPagePokemon,
  allPokemon,
  searchedPokemon,
  setSelectedPokemon,
  pokemonPerPage,
  totalPokemon,
  setCurrentPage,
}) => {
  return (
    <Grid container spacing={2}> 
      {searchedPokemon
        ? allPokemon
            .filter((pokemon) =>
              pokemon.name.startsWith(
                searchedPokemon[0].toUpperCase() + searchedPokemon.substring(1)
              )
            )
            .map((pokemon) => (
              <Grid item key={pokemon.id}>
                <CustomLink to={`/${pokemon.id}`}>
                  <PokemonItem
                    pokemon={pokemon}
                    setSelectedPokemon={setSelectedPokemon}
                  />
                </CustomLink>
              </Grid>
            ))
        : currentPagePokemon.map((pokemon) => (
            <Grid item key={pokemon.id}>
              <CustomLink to={`/${pokemon.id}`}>
                <PokemonItem
                  pokemon={pokemon}
                  setSelectedPokemon={setSelectedPokemon}
                />
              </CustomLink>
            </Grid>
          ))}
      <Grid item xs={12}>
        <Pagination
          pokemonPerPage={pokemonPerPage}
          totalPokemon={totalPokemon}
          setCurrentPage={setCurrentPage}
        />
      </Grid>
    </Grid>
  );
};

export default Main;
