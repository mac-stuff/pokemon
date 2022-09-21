import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./main/Main";
import Detail from "./detail/Detail";
import Favorites from "./favorites/Favorites";
import Arena from "./arena/Arena";
import Login from "./login/Login";
import Register from "./register/Register";
import Edit from "./edit/Edit";
import NotFound from "./detail/NotFound";

const Content = ({ searchedPokemon, isLogged, setIsLogged }) => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(() => {
    const localData = localStorage.getItem("selectedPokemon");
    return localData ? JSON.parse(localData) : {};
  });
  const [favoritesPokemon, setFavoritesPokemon] = useState(() => {
    const localData = localStorage.getItem("favoritesPokemon");
    return localData ? JSON.parse(localData) : [];
  });
  const [fightingPokemon, setFightingPokemon] = useState(() => {
    const localData = localStorage.getItem("fightingPokemon");
    return localData ? JSON.parse(localData) : [];
  });

  const [currentPage, setCurrentPage] = useState(3);
  const pokemonPerPage = 15;
  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPagePokemon = allPokemon.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  useEffect(() => {
    (async function () {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=151`
      ).then((res) => res.json());
      setPokemons(data.results);
    })();
  }, []);

  const setPokemons = async (results) => {
    results.forEach(async (pokemon) => {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      ).then((res) => res.json());
      const pokemonData = (({
        id,
        name,
        height,
        weight,
        base_experience,
        abilities,
        sprites,
      }) => ({
        id,
        name,
        height,
        weight,
        base_experience,
        abilities,
        sprites,
      }))(data);
      const pokemonName =
        pokemonData.name[0].toUpperCase() + pokemonData.name.substring(1);
      pokemonData.name = pokemonName;
      const pokemonImage = pokemonData.sprites.other.dream_world.front_default;
      pokemonData.sprites = pokemonImage;
      const pokemonAbility = pokemonData.abilities[0].ability.name;
      pokemonData.abilities = pokemonAbility;
      setAllPokemon((allPokemon) => [...allPokemon, pokemonData]);
    });
  };

  useEffect(() => {
    localStorage.setItem("selectedPokemon", JSON.stringify(selectedPokemon));
  }, [selectedPokemon]);

  useEffect(() => {
    localStorage.setItem("favoritesPokemon", JSON.stringify(favoritesPokemon));
  }, [favoritesPokemon]);

  useEffect(() => {
    localStorage.setItem("fightingPokemon", JSON.stringify(fightingPokemon));
  }, [fightingPokemon]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main
            currentPagePokemon={currentPagePokemon}
            allPokemon={allPokemon}
            searchedPokemon={searchedPokemon}
            setSelectedPokemon={setSelectedPokemon}
            pokemonPerPage={pokemonPerPage}
            totalPokemon={allPokemon.length}
            setCurrentPage={setCurrentPage}
          />
        }
      />
      <Route
        path="/:id"
        element={
          <Detail
            selectedPokemon={selectedPokemon}
            setSelectedPokemon={setSelectedPokemon}
            favoritesPokemon={favoritesPokemon}
            setFavoritesPokemon={setFavoritesPokemon}
            fightingPokemon={fightingPokemon}
            setFightingPokemon={setFightingPokemon}
            isLogged={isLogged}
          />
        }
      />
      <Route
        path="/Favorites"
        element={
          <Favorites
            favoritesPokemon={favoritesPokemon}
            searchedPokemon={searchedPokemon}
            allPokemon={allPokemon}
            setSelectedPokemon={setSelectedPokemon}
          />
        }
      />
      <Route
        path="/Arena"
        element={
          <Arena
            fightingPokemon={fightingPokemon}
            searchedPokemon={searchedPokemon}
            allPokemon={allPokemon}
            setSelectedPokemon={setSelectedPokemon}
            setFightingPokemon={setFightingPokemon}
          />
        }
      />
      <Route path="/Login" element={<Login setIsLogged={setIsLogged} />} />
      <Route path="/Register" element={<Register />} />
      {isLogged ? (
        <Route path="/Edit" element={<Edit allPokemon={allPokemon} />} />
      ) : (
        <Route path="/Edit" element={<Login setIsLogged={setIsLogged} />} />
      )}
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Content;
