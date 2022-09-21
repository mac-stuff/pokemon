import { Box, Typography } from "@mui/material";
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
        <Typography>No Favorites Pokemon Yet!</Typography>
      )}
    </Box>
  );
};

export default Favorites;
