import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import Favorites from "../pages/Favorites";
import Arena from "../pages/Arena";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Edit from "../pages/Edit";

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
  const [customizablePokemon, setCustomizablePokemon] = useState(() => {
    const localData = localStorage.getItem("customizablePokemon");
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
      simplifyAndSetPokemons(data.results);
    })();
  }, []);

  const simplifyAndSetPokemons = async (results) => {
    results.forEach(async (pokemon) => {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      ).then((res) => res.json());
      const simplifiedPokemon = (({
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
      const upperName =
        simplifiedPokemon.name[0].toUpperCase() +
        simplifiedPokemon.name.substring(1);
      simplifiedPokemon.name = upperName;
      const image = simplifiedPokemon.sprites.other.dream_world.front_default;
      simplifiedPokemon.sprites = image;
      const firstAbility = simplifiedPokemon.abilities[0].ability.name;
      simplifiedPokemon.abilities = firstAbility;
      setAllPokemon((allPokemon) => [...allPokemon, simplifiedPokemon]);
    });
  };

  // useEffect(async () => {
  //   const result = await fetch(
  //     `http://localhost:8000/favorites/${selectedPokemon.id}/`,
  //     {
  //       method: "GET",
  //     }
  //   ).then((res) => res.json());
  //   console.log("result ", result);
  //   result > 0 ? setLikeState(true) : setLikeState(false);
  // }, [selectedPokemon]);

  useEffect(() => {
    localStorage.setItem("selectedPokemon", JSON.stringify(selectedPokemon));
  }, [selectedPokemon]);

  useEffect(() => {
    localStorage.setItem("favoritesPokemon", JSON.stringify(favoritesPokemon));
  }, [favoritesPokemon]);

  useEffect(() => {
    localStorage.setItem("fightingPokemon", JSON.stringify(fightingPokemon));
  }, [fightingPokemon]);

  useEffect(() => {
    localStorage.setItem(
      "customizablePokemon",
      JSON.stringify(customizablePokemon)
    );
  }, [customizablePokemon]);

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
            customizablePokemon={customizablePokemon}
            setCustomizablePokemon={setCustomizablePokemon}
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
      <Route path="/LogIn" element={<Login setIsLogged={setIsLogged} />} />
      <Route path="/Register" element={<Register />} />
      <Route
        path="/Edit"
        element={<Edit customizablePokemon={customizablePokemon} />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Content;
