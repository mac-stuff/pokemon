import PokemonPage from "./pokemon-feed/index";

const Feed = ({ selectedPage, setSelectedPage, pokemonSearch }) => (
  <PokemonPage selectedPage={selectedPage} pokemonSearch={pokemonSearch} />
);

export default Feed;
