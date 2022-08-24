import { Card, CardMedia, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

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
      setPokemonList([])
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
    <Stack spacing={1} justifyContent="space-between">
      {pokemonList.map((pokemon) => (
        <Card key={pokemon.id}>
          <CardMedia
            component="img"
            image={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
            sx={{
              pt: "5%",
              borderRadius: "5%",
              padding: "5px",
              width: "15%",
            }}
          />
          <Typography variant="body1" gutterBottom color="textSecondary">
            {pokemon.name}
          </Typography>
          <Typography variant="body1" gutterBottom color="textSecondary">
            {pokemon.height}
          </Typography>
          <Typography variant="body1" gutterBottom color="textSecondary">
            {pokemon.weight}
          </Typography>
          <Typography variant="body1" gutterBottom color="textSecondary">
            {pokemon.base_experience}
          </Typography>
          <Typography variant="body1" gutterBottom color="textSecondary">
            {pokemon.abilities[0] && pokemon.abilities[0].ability.name} -
            {pokemon.abilities[1] && pokemon.abilities[1].ability.name}
          </Typography>
        </Card>
      ))}
      <Pagination
        setCurrentPage={setCurrentPage}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Stack>
  );
};

export default PokemonList;
