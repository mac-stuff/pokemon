import { Button, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import PokemonItem from "./PokemonItem";

const CustomLink = styled(Link)({
  textDecoration: "none",
});

const FightingPokemonList = ({ fightingPokemon, setSelectedPokemon }) => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate("/");
  };

  return (
    <Grid container spacing={2}>
      {fightingPokemon.map((pokemon) => (
        <Grid item key={pokemon.id}>
          <CustomLink to={`/${pokemon.id}`}>
            <PokemonItem
              pokemon={pokemon}
              setSelectedPokemon={setSelectedPokemon}
            />
          </CustomLink>
        </Grid>
      ))}
      <Grid item>
        <Button variant="contained" onClick={handleClickButton}>
          WALCZ
        </Button>
      </Grid>
    </Grid>
  );
};

export default FightingPokemonList;
