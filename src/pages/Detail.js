import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CustomFavoriteIcon = styled(FavoriteIcon)(({ disabled }) => ({
  color: disabled ? "grey" : "tomato",
}));
const CustomVerifiedUserIcon = styled(VerifiedUserIcon)(({ disabled }) => ({
  color: disabled ? "grey" : "tomato",
}));

const PokemonDetail = ({
  selectedPokemon,
  setSelectedPokemon,
  favoritesPokemon,
  setFavoritesPokemon,
  fightingPokemon,
  setFightingPokemon,
}) => {
  const navigate = useNavigate();

  const [favoriteIconIsActive, setFavoriteIconIsActive] = useState(false);

  const [verifiedUserIconIsActive, setVerifiedUserIconIsActive] =
    useState(false);

  const handleClickButton = () => {
    setSelectedPokemon(null);
    navigate("/");
  };

  const handleFightClick = () => {
    fightingPokemon.length < 2 &&
    setFightingPokemon(
     fightingPokemon.includes(selectedPokemon)
        ? fightingPokemon.filter(
            (pokemon) => pokemon.name !== selectedPokemon.name
          )
        : (fightingPokemon) => [...fightingPokemon, selectedPokemon]
    );
    fightingPokemon.includes(selectedPokemon)
      ? setVerifiedUserIconIsActive(!true)
      : setVerifiedUserIconIsActive(!false);
  }

  const handleLikeClick = () => {
      setFavoritesPokemon(
        favoritesPokemon.includes(selectedPokemon)
          ? favoritesPokemon.filter(
              (pokemon) => pokemon.name !== selectedPokemon.name
            )
          : (favoritesPokemon) => [...favoritesPokemon, selectedPokemon]
      );
      favoritesPokemon.includes(selectedPokemon)
        ? setFavoriteIconIsActive(!true)
        : setFavoriteIconIsActive(!false);
    }
  
  
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
          </Stack>
        </Stack>
        <IconButton
          onClick={handleLikeClick}
        >
          {favoriteIconIsActive ? (
            <CustomFavoriteIcon success />
          ) : (
            <CustomFavoriteIcon disabled />
          )}
        </IconButton>
        <IconButton
          onClick={handleFightClick}
        >
          {verifiedUserIconIsActive ? (
            <CustomVerifiedUserIcon success />
          ) : (
            <CustomVerifiedUserIcon disabled />
          )}
        </IconButton>
        <Stack direction="row" spacing={5}>
          <Button variant="contained" onClick={handleClickButton}>
            Strona Główna
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default PokemonDetail;