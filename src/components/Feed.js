import PokemonPage from "./pokemon-feed/PokemonPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Feed = ({ selectedPage, searchedPokemon }) => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        exact
        element={
          <PokemonPage
            selectedPage={selectedPage}
            searchedPokemon={searchedPokemon}
          />
        }
      />
    </Routes>
  </BrowserRouter>
);

export default Feed;
