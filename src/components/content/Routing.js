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

const Routing = ({
  searchedPokemon,
  isLoggedIn,
  setisLoggedIn,
  editedPokemon,
  setEditedPokemon,
}) => {
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
      setPokemonsFromDB();
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
      pokemonData.name =
        pokemonData.name[0].toUpperCase() + pokemonData.name.substring(1);
      pokemonData.sprites = pokemonData.sprites.other.dream_world.front_default;
      pokemonData.abilities = pokemonData.abilities[0].ability.name;
      setAllPokemon((allPokemon) => [...allPokemon, pokemonData]);
    });
  };

  const setPokemonsFromDB = async () => {
    const editedPokemon = await fetch(`http://localhost:8000/edited`).then(
      (res) => res.json()
    );
    editedPokemon.forEach((pokemon) => {
      pokemon.name = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
      setAllPokemon((allPokemon) => [...allPokemon, pokemon]);
    });
  };

  useEffect(() => {
    localStorage.setItem("selectedPokemon", JSON.stringify(selectedPokemon));
  }, [selectedPokemon]);

  useEffect(() => {
    (async function () {
      await fetch(`http://localhost:8000/favorites`)
        .then((res) => res.json())
        .then((response) => setFavoritesPokemon(response));
    })();
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
            isLoggedIn={isLoggedIn}
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
            setFightingPokemon={setFightingPokemon}
          />
        }
      />
      <Route path="/Login" element={<Login setisLoggedIn={setisLoggedIn} />} />
      <Route path="/Register" element={<Register />} />
      {isLoggedIn ? (
        <Route
          path="/Edit"
          element={
            <Edit
              allPokemon={allPokemon}
              searchedPokemon={searchedPokemon}
              editedPokemon={editedPokemon}
              setEditedPokemon={setEditedPokemon}
            />
          }
        />
      ) : (
        <Route path="/Edit" element={<Login setisLoggedIn={setisLoggedIn} />} />
      )}
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
