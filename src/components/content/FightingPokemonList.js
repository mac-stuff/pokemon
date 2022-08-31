import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PokemonItem from "./PokemonItem";
import Placeholder from "./Placeholder";
import { useState } from "react";

const CustomLink = styled(Link)({
  textDecoration: "none",
});

const FightingPokemonList = ({ fightingPokemon, setSelectedPokemon }) => {
  const [result, setResult] = useState();

  const handleClickButton = () => {
    const firstPokemonPower =
      fightingPokemon[0].base_experience * fightingPokemon[0].weight;
    const secondPokemonPower =
      fightingPokemon[1].base_experience * fightingPokemon[1].weight;
    {
      firstPokemonPower > secondPokemonPower ? setResult(1) : setResult(2);
    }
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
        {fightingPokemon.length < 2 ? (
          <Placeholder />
        ) : (
          <Button variant="contained" onClick={handleClickButton}>
            WALCZ
          </Button>
        )}
        {result === 1 ? (
          <div>first pokmon win</div>
        ) : (
          <div>second pokmon win</div>
        )}
      </Grid>
    </Grid>
  );
};

export default FightingPokemonList;
