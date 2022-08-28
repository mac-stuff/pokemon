import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import styled from "styled-components";

const CustomCard = styled(Card)({
  width: "250px",
  height: "350px",
  backgroundColor: "lightgrey",
  textAlign: "center",
  padding: "10px",
  "&:hover": {
    width: "260px",
    height: "360px",
    boxShadow: "15px 15px 15px -10px tomato",
  },
});

const PokemonItem = ({ pokemon, setSelectedPokemon }) => {
  return (
    <CustomCard>
      <CardActionArea
        onClick={() => {
          setSelectedPokemon(pokemon);
        }}
      >
        <img
          style={{ width: 250, height: 158 }}
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
        />
        <CardContent>
          <Typography variant="body1" gutterBottom color="textSecondary">
            {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
          </Typography>
          <Stack direction="row" spacing={10}>
            <Typography
              align="justify"
              variant="body1"
              gutterBottom
              color="textSecondary"
            >
              {pokemon.height}
            </Typography>
            <Typography variant="body1" gutterBottom color="textSecondary">
              {pokemon.base_experience}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={5}>
            <Typography variant="body1" gutterBottom color="textPrimary">
              Height
            </Typography>
            <Typography variant="body1" gutterBottom color="textPrimary">
              Base experience
            </Typography>
          </Stack>
          <Stack direction="row" spacing={10}>
            <Typography variant="body1" gutterBottom color="textSecondary">
              {pokemon.weight}
            </Typography>
            <Typography variant="body1" gutterBottom color="textSecondary">
              {pokemon.abilities[0] && pokemon.abilities[0].ability.name}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={5}>
            <Typography variant="body1" gutterBottom color="textPrimary">
              Weight
            </Typography>
            <Typography variant="body1" gutterBottom color="textPrimary">
              Ability
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </CustomCard>
  );
};

export default PokemonItem;
