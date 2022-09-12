import { Container, Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./navbar/index";
import Search from "./search";
import Content from "./Content";
import Rightbar from "./Rightbar";

const Layout = () => {
  const [location, setLoction] = useState();
  const [searchedPokemon, setSearchedPokemon] = useState();
  const [isLogged, setIsLogged] = useState(() => {
    const localData = localStorage.getItem("isLogged");
    return localData ? JSON.parse(localData) : false;
  });

  useEffect(() => {
    localStorage.setItem("isLogged", JSON.stringify(isLogged));
  }, [isLogged]);

  return (
    <BrowserRouter>
      <Container>
        <Navbar isLogged={isLogged} setIsLogged={setIsLogged} />
        {location.pathname === "/" && (
          <Search setSearchedPokemon={setSearchedPokemon} />
        )}
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Content
            searchedPokemon={searchedPokemon}
            isLogged={isLogged}
            setIsLogged={setIsLogged}
            setLoction={setLoction}
          />
          <Rightbar />
        </Stack>
      </Container>
    </BrowserRouter>
  );
};

export default Layout;
