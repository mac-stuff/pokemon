import PokemonList from "../components/main/PokemonList";
import { Box } from "@mui/system";

const Main = ({
  setCurrentPage,
  prevPage,
  nextPage,
  currentPagePokemon,
  allPokemon,
  searchedPokemon,
  setSelectedPokemon,
}) => {
  return (
    <Box flex={6} p={2}>
      <PokemonList
        searchedPokemon={searchedPokemon}
        currentPagePokemon={currentPagePokemon}
        setCurrentPage={setCurrentPage}
        prevPage={prevPage}
        nextPage={nextPage}
        allPokemon={allPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
    </Box>
  );
};

export default Main;
