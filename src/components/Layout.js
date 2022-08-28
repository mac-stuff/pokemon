import { Container, Stack } from "@mui/system";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./navbar/index";
import Search from "./search";
import Content from "./Content";
import Rightbar from "./Rightbar";

const Layout = () => {
  const [searchedPokemon, setSearchedPokemon] = useState();

  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Search setSearchedPokemon={setSearchedPokemon} />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Content searchedPokemon={searchedPokemon} />
          <Rightbar />
        </Stack>
      </Container>
    </BrowserRouter>
  );
};

export default Layout;
