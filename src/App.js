import Navbar from "./components/navbar/index";
import Search from "./components/search/index";
import { Container } from "@mui/system";
import { Stack } from "@mui/material";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import { useState } from "react";

function App() {
  const [pokemonSearch, setPokemonSearch] = useState();

  return (
    <Container>
      <Navbar />
      <Search setPokemonSearch={setPokemonSearch} />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Feed pokemonSearch={pokemonSearch}></Feed>
        <Rightbar />
      </Stack>
    </Container>
  );
}

export default App;
