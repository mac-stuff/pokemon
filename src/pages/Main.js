import PokemonList from "../components/content/PokemonList";
import { Box } from "@mui/system";

const Main = ({
  currentPagePokemon,
  allPokemon,
  searchedPokemon,
  setSelectedPokemon,
  pokemonPerPage,
  totalPokemon,
  setCurrentPage,
}) => {
  return (
    <Box flex={6} p={2}>
      <PokemonList
        currentPagePokemon={currentPagePokemon}
        allPokemon={allPokemon}
        searchedPokemon={searchedPokemon}
        setSelectedPokemon={setSelectedPokemon}
        pokemonPerPage={pokemonPerPage}
        totalPokemon={totalPokemon}
        setCurrentPage={setCurrentPage}
      />
    </Box>
  );
};

export default Main;
