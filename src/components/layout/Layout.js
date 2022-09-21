import { Container, Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./navbar";
import Searchbar from "./searchbar";
import Footerbar from "./footerbar";
import Content from "./content/Content"
import styled from "styled-components";

const CustomStack = styled(Stack)({
  background: "rgba(234, 236, 229, .3)",
  padding: "25px",
  minHeight: "1200px",
  display: "block",
  alignItems: "center",
});

const Layout = () => {
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
        <Searchbar setSearchedPokemon={setSearchedPokemon} />
        <CustomStack>
          <Content
            searchedPokemon={searchedPokemon}
            isLogged={isLogged}
            setIsLogged={setIsLogged}
          />
        </CustomStack>
        <Footerbar />
      </Container>
    </BrowserRouter>
  );
};

export default Layout;
