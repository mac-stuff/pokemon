import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Pagination from "./Pagination";
import PokemonItem from "./PokemonItem";

const CustomLink = styled(Link)({
  textDecoration: "none",
});

const PokemonList = ({
  setCurrentPage,
  prevPage,
  nextPage,
  currentPagePokemon,
  allPokemon,
  searchedPokemon,
  setSelectedPokemon,
}) => {
  return (
    <Grid container spacing={2}>
      {searchedPokemon
        ? allPokemon
            .filter((pokemon) => pokemon.name.startsWith(searchedPokemon))
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
