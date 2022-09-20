import { Box } from "@mui/material";
import { Fragment } from "react";
import Main from "./Main";

const Favorites = ({
  favoritesPokemon,
  searchedPokemon,
  setCurrentPage,
  prevPage,
  nextPage,
  allPokemon,
  setSelectedPokemon,
}) => {
  return (
    <Box flex={6} p={2}>
      {favoritesPokemon.length > 0 ? (
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
        <Fragment>
          <h2>No Favorites Pokemon Yet!</h2>
        </Fragment>
      )}
    </Box>
  );
};

export default Favorites;
