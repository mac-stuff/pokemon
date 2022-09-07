import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import Favorites from "../pages/Favorites";
import Stage from "../pages/Stage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Add from "../pages/Add";

const Content = ({
  searchedPokemon,
  isLogged,
  setIsLogged,
  setLoggetinUser,
}) => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState();
  const [favoritesPokemon, setFavoritesPokemon] = useState([]);
  const [fightingPokemon, setFightingPokemon] = useState([]);
  const [customizablePokemon, setCustomizablePokemon] = useState([]);

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
      getAllPokemon(data.results);
    })();
  }, []);

  const getAllPokemon = async (results) => {
    results.forEach(async (pokemon) => {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      ).then((res) => res.json());
      setAllPokemon((allPokemon) => [...allPokemon, data]);
    });
  };

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
        path="/Ulubione"
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
          <Stage
            fightingPokemon={fightingPokemon}
            searchedPokemon={searchedPokemon}
            allPokemon={allPokemon}
            setSelectedPokemon={setSelectedPokemon}
            setFightingPokemon={setFightingPokemon}
          />
        }
      />
      <Route
        path="/Logowanie"
        element={
          <Login setIsLogged={setIsLogged} setLoggetinUser={setLoggetinUser} />
        }
      />
      <Route path="/Rejestracja" element={<Register />} />
      <Route
        path="/Edycja"
        element={
          <Add isLogged={isLogged} customizablePokemon={customizablePokemon} />
        }
      />
      <Route path="/Wyloguj" element={<Register />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Content;
