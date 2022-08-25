import PokemonList from "./PokemonList";
import React, { useEffect, useState } from "react";
import PokemonDetails from "./PokemonDetails";
import { Box } from "@mui/system";

const PokemonPage = ({ pokemonSearch }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=15&offset=15`
  );
  const [prevPage, setPrevPage] = useState();
  const [nextPage, setNextPage] = useState();
  const [allPokemonList, setAllPokemonList] = useState([]);
  const [pokemonChoice, setPokemonChoice] = useState();
  const [favoritePokemon, setFavoritePokemon] = useState();

  useEffect(() => {
    (async function () {
      const data = await fetch(currentPage).then((res) => res.json());
      setPokemonList([]);
      getPokemons(data.results);
      setPrevPage(data.previous);
      setNextPage(data.next);
    })();
  }, [currentPage]);

  useEffect(() => {
    (async function () {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=151`
      ).then((res) => res.json());
      getAllPokemons(data.results);
    })();
  }, []);

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
    <Box flex={6} p={2}>
      {pokemonChoice ? (
        <PokemonDetails
          pokemonChoice={pokemonChoice}
          setFavoritePokemon={setFavoritePokemon}
          setPokemonChoice={setPokemonChoice}
        />
      ) : (
        <PokemonList
          pokemonSearch={pokemonSearch}
          pokemonList={pokemonList}
          setCurrentPage={setCurrentPage}
          prevPage={prevPage}
          nextPage={nextPage}
          allPokemonList={allPokemonList}
          setPokemonChoice={setPokemonChoice}
        />
      )}
    </Box>
  );
};

export default PokemonPage;
