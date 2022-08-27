import { Container, Stack } from "@mui/system";
import Navbar from "./navbar/index";
import Search from "./search";
import Feed from "./Feed";
import Rightbar from "./Rightbar";
import { useState } from "react";

const Layout = () => {
  const [selectedPage, setSelectedPage] = useState();
  const [searchedPokemon, setSearchedPokemon] = useState();

  return (
    <Container>
      <Navbar setSelectedPage={setSelectedPage} />
      <Search setSearchedPokemon={setSearchedPokemon} />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Feed selectedPage={selectedPage} searchedPokemon={searchedPokemon} />
        <Rightbar />
      </Stack>
    </Container>
  );
};

export default Layout;
