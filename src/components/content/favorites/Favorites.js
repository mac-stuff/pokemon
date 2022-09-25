import { Typography } from "@mui/material";
import Main from "../main/Main";

const Favorites = ({
  favoritesPokemon,
  searchedPokemon,
  setCurrentPage,
  prevPage,
  nextPage,
  allPokemon,
  setSelectedPokemon,
}) => {
  ("here are your favorite Pokemon");
  return favoritesPokemon.length > 0 ? (
    <Main
      searchedPokemon={searchedPokemon}
      currentPagePokemon={favoritesPokemon}
      setCurrentPage={setCurrentPage}
      prevPage={prevPage}
      nextPage={nextPage}
      allPokemon={allPokemon}
      setSelectedPokemon={setSelectedPokemon}
    />
  ) : (
    <Typography>No Favorites Pokemon Yet!</Typography>
  );
};

export default Favorites;
