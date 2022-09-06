import { Container, Stack } from "@mui/system";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./navbar/index";
import Search from "./search";
import Content from "./Content";
import Rightbar from "./Rightbar";

const Layout = () => {
  const [searchedPokemon, setSearchedPokemon] = useState();
  const [isLogged, setIsLogged] = useState(false);

  return (
    <BrowserRouter>
      <Container>
        <Navbar isLogged={isLogged} />
        <Search setSearchedPokemon={setSearchedPokemon} />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Content searchedPokemon={searchedPokemon} setIsLogged={setIsLogged}/>
          <Rightbar />
        </Stack>
      </Container>
    </BrowserRouter>
  );
};

export default Layout;
