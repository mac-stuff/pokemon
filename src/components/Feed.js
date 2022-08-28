import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pokemon-feed/MainPage";
import FavoritesPage from "./pokemon-feed/FavoritesPage";
import StagePage from "./pokemon-feed/StagePage";
import LoginPage from "./pokemon-feed/LoginPage";
import RegisterPage from "./pokemon-feed/RegisterPage";

const Feed = ({ selectedPage, searchedPokemon }) => {
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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <MainPage
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              prevPage={prevPage}
              setPrevPage={setPrevPage}
              nextPage={nextPage}
              setNextPage={setNextPage}
              currentPagePokemon={currentPagePokemon}
              setCurrentPagePokemon={setCurrentPagePokemon}
              allPokemon={allPokemon}
              setAllPokemon={setAllPokemon}
              selectedPage={selectedPage}
              searchedPokemon={searchedPokemon}
              selectedPokemon={selectedPokemon}
              setSelectedPokemon={setSelectedPokemon}
              favoritesPokemon={favoritesPokemon}
              setFavoritesPokemon={setFavoritesPokemon}
            />
          }
        />
        <Route path="/favorites" exact element={<FavoritesPage />} />
        <Route path="/stage" exact element={<StagePage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/register" exact element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Feed;
