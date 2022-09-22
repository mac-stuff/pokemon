import { Container, Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./navbar";
import Searchbar from "./searchbar";
import Content from "./content/Content";
import Footerbar from "./footerbar";
import styled from "styled-components";

const CustomStack = styled(Stack)({
  background: "rgba(234, 236, 229, .3)",
  padding: "30px",
  minHeight: "1000px",
  alignItems: "center",
  textAlign: "center",
});

const Layout = () => {
  const [searchedPokemon, setSearchedPokemon] = useState();
  const [isLoggedIn, setisLoggedIn] = useState(() => {
    const localData = localStorage.getItem("isLoggedIn");
    return localData ? JSON.parse(localData) : false;
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <BrowserRouter>
      <Container>
        <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
        <Searchbar setSearchedPokemon={setSearchedPokemon} />
        <CustomStack>
          <Content
            searchedPokemon={searchedPokemon}
            isLoggedIn={isLoggedIn}
            setisLoggedIn={setisLoggedIn}
          />
        </CustomStack>
        <Footerbar />
      </Container>
    </BrowserRouter>
  );
};

export default Layout;
