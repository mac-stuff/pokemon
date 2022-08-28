import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useState } from "react";

const PokemonDetail = ({
  selectedPokemon,
  setSelectedPokemon,
  favoritesPokemon,
  setFavoritesPokemon,
}) => {
  const [isActive, setIsActive] = useState(
    favoritesPokemon.includes(selectedPokemon) ? true : false
  );

  const handleClickButton = () => {
    setSelectedPokemon(null);
  };

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Stack direction="row" spacing={10}>
          <img
            style={{ width: 450, height: 358 }}
            src={selectedPokemon.sprites.other.dream_world.front_default}
            alt={selectedPokemon.name}
          />
          <Stack spacing={5}>
            <Typography variant="h3" gutterBottom color="textSecondary">
              {selectedPokemon.name[0].toUpperCase() +
                selectedPokemon.name.substring(1)}
            </Typography>
            <Stack direction="row" spacing={5}>
              <Typography
                align="justify"
                variant="body1"
                gutterBottom
                color="textSecondary"
              >
                {selectedPokemon.height}
              </Typography>
              <Typography variant="body1" gutterBottom color="textSecondary">
                {selectedPokemon.base_experience}
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
                {selectedPokemon.weight}
              </Typography>
              <Typography variant="body1" gutterBottom color="textSecondary">
                {selectedPokemon.abilities[0] &&
                  selectedPokemon.abilities[0].ability.name}
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
            setFavoritesPokemon(
              favoritesPokemon.includes(selectedPokemon)
                ? favoritesPokemon.filter(
                    (pokemon) => pokemon.name !== selectedPokemon.name
                  )
                : (favoritesPokemon) => [...favoritesPokemon, selectedPokemon]
            );
            favoritesPokemon.includes(selectedPokemon)
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

export default PokemonDetail;
