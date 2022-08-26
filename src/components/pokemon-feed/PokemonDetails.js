import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useState } from "react";

const PokemonDetails = ({
  pokemonChoice,
  setPokemonChoice,
  favoritePokemon,
  setFavoritePokemon,
}) => {
  const [isActive, setIsActive] = useState(
    favoritePokemon.includes(pokemonChoice) ? true : false
  );

  const handleClickButton = () => {
    setPokemonChoice(null);
  };

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Stack direction="row" spacing={10}>
          <img
            style={{ width: 450, height: 358 }}
            src={pokemonChoice.sprites.other.dream_world.front_default}
            alt={pokemonChoice.name}
          />
          <Stack spacing={5}>
            <Typography variant="h3" gutterBottom color="textSecondary">
              {pokemonChoice.name[0].toUpperCase() +
                pokemonChoice.name.substring(1)}
            </Typography>
            <Stack direction="row" spacing={5}>
              <Typography
                align="justify"
                variant="body1"
                gutterBottom
                color="textSecondary"
              >
                {pokemonChoice.height}
              </Typography>
              <Typography variant="body1" gutterBottom color="textSecondary">
                {pokemonChoice.base_experience}
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
            <Stack direction="row" spacing={5}>
              <Typography variant="body1" gutterBottom color="textSecondary">
                {pokemonChoice.weight}
              </Typography>
              <Typography variant="body1" gutterBottom color="textSecondary">
                {pokemonChoice.abilities[0] &&
                  pokemonChoice.abilities[0].ability.name}
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
            <Stack direction="row" spacing={5}>
              <Button variant="contained" onClick={handleClickButton}>
                Strona Główna
              </Button>
            </Stack>
          </Stack>
        </Stack>
        <IconButton
          aria-label="add to favorites"
          onClick={() => {
            setFavoritePokemon(
              favoritePokemon.includes(pokemonChoice)
                ? favoritePokemon.filter(
                    (pokemon) => pokemon.name !== pokemonChoice.name
                  )
                : (favoritePokemon) => [...favoritePokemon, pokemonChoice]
            );
            favoritePokemon.includes(pokemonChoice)
              ? setIsActive(false)
              : setIsActive(true);
          }}
        >
          <FavoriteIcon sx={{ color: isActive ? "tomato" : "grey" }} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default PokemonDetails;