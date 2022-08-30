import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const CustomFavoriteIcon = styled(FavoriteIcon)(({ color }) => ({
  color: color === "primary" ? "tomato" : "grey",
}));
const CustomVerifiedUserIcon = styled(VerifiedUserIcon)(({ color }) => ({
  color: color === "primary" ? "tomato" : "grey",
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
  const [likeState, setLikeState] = useState("success");
  const [fightState, setFightState] = useState("success");

  const handleClickLikeIcon = () => {
    setFavoritesPokemon(
      favoritesPokemon.includes(selectedPokemon)
        ? favoritesPokemon.filter(
            (pokemon) => pokemon.name !== selectedPokemon.name
          )
        : (favoritesPokemon) => [...favoritesPokemon, selectedPokemon]
    );
    favoritesPokemon.includes(selectedPokemon)
      ? (selectedPokemon.isLiked = true)
      : (selectedPokemon.isLiked = false);
    selectedPokemon.isLiked ? setLikeState("success") : setLikeState("primary");
  };

  const handleClickFightIcon = () => {
    fightingPokemon.length < 2 &&
      setFightingPokemon(
        fightingPokemon.includes(selectedPokemon)
          ? fightingPokemon.filter(
              (pokemon) => pokemon.name !== selectedPokemon.name
            )
          : (fightingPokemon) => [...fightingPokemon, selectedPokemon]
      );
    fightingPokemon.includes(selectedPokemon)
      ? (selectedPokemon.isFighting = true)
      : (selectedPokemon.isFighting = false);
    selectedPokemon.isFighting
      ? setFightState("success")
      : setFightState("primary");
  };

  const handleClickButton = () => {
    setSelectedPokemon(null);
    navigate("/");
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs="auto">
        <Stack direction="row" spacing={10} mt={10} mb={10}>
          <img
            style={{ width: 450, height: 358 }}
            src={selectedPokemon.sprites.other.dream_world.front_default}
            alt={selectedPokemon.name}
          />
          <Stack spacing={5} mt={5} mb={5}>
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
        <IconButton onClick={handleClickLikeIcon}>
          <CustomFavoriteIcon color={likeState} />
        </IconButton>
        <IconButton onClick={handleClickFightIcon}>
          <CustomVerifiedUserIcon color={fightState} />
        </IconButton>
        <Stack direction="row" spacing={5} mt={5} mb={5}>
          <Button variant="contained" onClick={handleClickButton}>
            Strona Główna
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default PokemonDetail;
