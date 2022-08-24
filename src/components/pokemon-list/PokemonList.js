import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=15&offset=15`
  );
  const [prevPage, setPrevPage] = useState();
  const [nextPage, setNextPage] = useState();

  useEffect(() => {
    (async function () {
      const data = await fetch(currentPage).then((res) => res.json());
      setPokemonList([]);
      getPokemons(data.results);
      setPrevPage(data.previous);
      setNextPage(data.next);
      console.log(data);
    })();
  }, [currentPage]);

  const getPokemons = async (results) => {
    results.forEach(async (pokemon) => {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      ).then((res) => res.json());
      setPokemonList((pokemonList) => [...pokemonList, data]);
    });
  };

  return (
    <Grid container spacing={2}>
      {pokemonList.map((pokemon) => (
        <Grid item key={pokemon.id}>
          <PokemonCard pokemon={pokemon}> </PokemonCard>
        </Grid>
      ))}
      <Pagination
        setCurrentPage={setCurrentPage}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Grid>
  );
};

export default PokemonList;
