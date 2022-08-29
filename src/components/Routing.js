import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Favorites from "../pages/Favorites";
import Stage from "../pages/Stage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Detail from "../pages/Detail";
import Main from "../pages/Main";

const Routing = ({
  setCurrentPage,
  prevPage,
  nextPage,
  currentPagePokemon,
  allPokemon,
  searchedPokemon,
  selectedPokemon,
  setSelectedPokemon,
  favoritesPokemon,
  setFavoritesPokemon,
  fightingPokemon,
  setFightingPokemon,
}) => {
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
            prevPage={prevPage}
            nextPage={nextPage}
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
            currentPagePokemon={currentPagePokemon}
            prevPage={prevPage}
            nextPage={nextPage}
            allPokemon={allPokemon}
            setSelectedPokemon={setSelectedPokemon}
          />
        }
      />
      <Route path="/Logowanie" element={<Login />} />
      <Route path="/Rejestracja" element={<Register />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Routing;
