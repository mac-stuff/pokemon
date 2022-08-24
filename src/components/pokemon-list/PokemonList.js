import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ userInput }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=15&offset=15`
  );
  const [prevPage, setPrevPage] = useState();
  const [nextPage, setNextPage] = useState();
  const [allPokemonList, setAllPokemonList] = useState([]);

  useEffect(() => {
    (async function () {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=1154`
      ).then((res) => res.json());
      getAllPokemons(data.results);
    })();
  }, []);

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

  const getAllPokemons = async (results) => {
    results.forEach(async (pokemon) => {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      ).then((res) => res.json());
      setAllPokemonList((allPokemonList) => [...allPokemonList, data]);
    });
  };

  return (
    <Grid container spacing={2}>
      {userInput
        ? allPokemonList
            .filter((pokemon) => pokemon.name.startsWith(userInput))
            .map((pokemon) => (
              <Grid item key={pokemon.id}>
                <PokemonCard pokemon={pokemon}> </PokemonCard>
              </Grid>
            ))
        : pokemonList.map((pokemon) => (
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
