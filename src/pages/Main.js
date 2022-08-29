import PokemonList from "../components/content/PokemonList";
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
       setCurrentPage={setCurrentPage}
       prevPage={prevPage}
       nextPage={nextPage}
       currentPagePokemon={currentPagePokemon}
       allPokemon={allPokemon}
       searchedPokemon={searchedPokemon}
       setSelectedPokemon={setSelectedPokemon}
      />
    </Box>
  );
};

export default Main;
