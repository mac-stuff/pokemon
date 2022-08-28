import PokemonList from "../components/main/PokemonList";
import PokemonDetail from "./PokemonDetail";
import { Box } from "@mui/system";

const Main = ({
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
}) => {
  return (
    <Box flex={6} p={2}>
      {selectedPokemon ? (
        <PokemonDetail
          selectedPokemon={selectedPokemon}
          favoritesPokemon={favoritesPokemon}
          setFavoritesPokemon={setFavoritesPokemon}
          setSelectedPokemon={setSelectedPokemon}
        />
      ) : (
        <PokemonList
          searchedPokemon={searchedPokemon}
          currentPagePokemon={currentPagePokemon}
          setCurrentPage={setCurrentPage}
          prevPage={prevPage}
          nextPage={nextPage}
          allPokemon={allPokemon}
          setSelectedPokemon={setSelectedPokemon}
        />
      )}
    </Box>
  );
};

export default Main;
