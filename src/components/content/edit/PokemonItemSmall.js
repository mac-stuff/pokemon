import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import styled from "styled-components";

const CustomCard = styled(Card)({
  width: "120px",
  height: "120px",
  backgroundColor: "#eaece5 !important",
  textAlign: "center",
  padding: "15px",
  "&:hover": {
    width: "122px",
    height: "122px",
    boxShadow: "15px 15px 15px -10px #3b3a30",
  },
});

const CustomBox = styled(Box)({
  width: "80px",
  height: "80px",
});

const PokemonItemSmall = ({ pokemon, setEditedPokemon }) => {
  const clickHandle = () => {
    setEditedPokemon(pokemon);
  };

  return (
    <CustomCard onClick={clickHandle}>
      <CustomBox component="img" src={pokemon.sprites} alt={pokemon.name} />
      <CardContent>
        <Typography variant="h6" gutterBottom color="textSecondary">
          {pokemon.name}
        </Typography>
      </CardContent>
    </CustomCard>
  );
};

export default PokemonItemSmall;
