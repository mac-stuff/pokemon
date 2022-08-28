import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Favorites from "../pages/Favorites";
import Stage from "../pages/Stage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Detail from "../pages/Detail";
import Main from "../pages/Main";

const Content = ({ searchedPokemon }) => {
  const [currentPage, setCurrentPage] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=15&offset=15`
  );
  const [prevPage, setPrevPage] = useState();
  const [nextPage, setNextPage] = useState();
  const [currentPagePokemon, setCurrentPagePokemon] = useState([]);
  const [allPokemon, setAllPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState();
  const [favoritesPokemon, setFavoritesPokemon] = useState([]);

  useEffect(() => {
    (async function () {
      const data = await fetch(currentPage).then((res) => res.json());
      setCurrentPagePokemon([]);
      getCurrentPagePokemon(data.results);
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

  const getCurrentPagePokemon = async (results) => {
    results.forEach(async (pokemon) => {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      ).then((res) => res.json());
      setCurrentPagePokemon((currentPagePokemon) => [
        ...currentPagePokemon,
        data,
      ]);
    });
  };

  const getAllPokemons = async (results) => {
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
            setCurrentPage={setCurrentPage}
            prevPage={prevPage}
            nextPage={nextPage}
            currentPagePokemon={currentPagePokemon}
            allPokemon={allPokemon}
            searchedPokemon={searchedPokemon}
            selectedPokemon={selectedPokemon}
            setSelectedPokemon={setSelectedPokemon}
            favoritesPokemon={favoritesPokemon}
            setFavoritesPokemon={setFavoritesPokemon}
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
          />
        }
      />
      <Route
        path="/Ulubione"
        element={
          <Favorites
            favoritesPokemon={favoritesPokemon}
            searchedPokemon={searchedPokemon}
            currentPagePokemon={currentPagePokemon}
            setCurrentPage={setCurrentPage}
            prevPage={prevPage}
            nextPage={nextPage}
            allPokemon={allPokemon}
            setSelectedPokemon={setSelectedPokemon}
          />
        }
      />
      <Route path="/Arena" element={<Stage />} />
      <Route path="/Logowanie" element={<Login />} />
      <Route path="/Rejestracja" element={<Register />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Content;
