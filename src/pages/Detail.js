import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PokemonDetail = ({
  selectedPokemon,
  setSelectedPokemon,
  favoritesPokemon,
  setFavoritesPokemon,
  fightingPokemon,
  setFightingPokemon,
  customizablePokemon,
  setCustomizablePokemon,
  isLogged,
}) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const addToDB = async (dbName, pokemon) => {
    await fetch(`http://localhost:8000/${dbName}/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pokemon),
    }).then(() => {
      setMessage(
        `You are successfully added Pokemon to ${dbName.toUpperCase()}.`
      );
    });
  };

  const removeFromDB = async (dbName, pokemon) => {
    await fetch(`http://localhost:8000/${dbName}/${pokemon.id}/`, {
      method: "DELETE",
    }).then(() => {
      setMessage(
        `You are successfully deleted Pokemon from ${dbName.toUpperCase()}.`
      );
    });
  };

  const handleClickLikeIcon = async () => {
    await fetch(`http://localhost:8000/favorites?id=${selectedPokemon.id}`)
      .then((res) => res.json())
      .then((data) => {
        data.length > 0
          ? (selectedPokemon.isLiked = false)
          : (selectedPokemon.isLiked = true);
        localStorage.setItem(
          "selectedPokemon",
          JSON.stringify(selectedPokemon)
        );
        data.length > 0
          ? removeFromDB("favorites", selectedPokemon)
          : addToDB("favorites", selectedPokemon);
        data.length > 0
          ? setFavoritesPokemon(
              favoritesPokemon.filter(
                (pokemon) => pokemon.name !== selectedPokemon.name
              )
            )
          : setFavoritesPokemon((favoritesPokemon) => [
              ...favoritesPokemon,
              selectedPokemon,
            ]);
      });
  };

  const handleClickFightIcon = async () => {
    await fetch(`http://localhost:8000/arena?id=${selectedPokemon.id}`)
      .then((res) => res.json())
      .then((data) => {
        data.length > 0
          ? (selectedPokemon.isFighting = false)
          : (selectedPokemon.isFighting = true);
        localStorage.setItem(
          "selectedPokemon",
          JSON.stringify(selectedPokemon)
        );
        data.length > 0
          ? removeFromDB("arena", selectedPokemon)
          : addToDB("arena", selectedPokemon);
        data.length > 0
          ? setFightingPokemon(
              fightingPokemon.filter(
                (pokemon) => pokemon.name !== selectedPokemon.name
              )
            )
          : setFightingPokemon((fightingPokemon) => [
              ...fightingPokemon,
              selectedPokemon,
            ]);
      });
  };

  const handleClickBuildIcon = async () => {
    await fetch(`http://localhost:8000/edit?id=${selectedPokemon.id}`)
      .then((res) => res.json())
      .then((data) => {
        data.length > 0
          ? (selectedPokemon.isCustomizable = false)
          : (selectedPokemon.isCustomizable = true);
        localStorage.setItem(
          "selectedPokemon",
          JSON.stringify(selectedPokemon)
        );
        data.length > 0
          ? removeFromDB("edit", selectedPokemon)
          : addToDB("edit", selectedPokemon);
        data.length > 0
          ? setCustomizablePokemon(
              customizablePokemon.filter(
                (pokemon) => pokemon.name !== selectedPokemon.name
              )
            )
          : setCustomizablePokemon((customizablePokemon) => [
              ...customizablePokemon,
              selectedPokemon,
            ]);
      });
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
            src={selectedPokemon.sprites}
            alt={selectedPokemon.name}
          />
          <Stack spacing={5} mt={5} mb={5}>
            <Typography variant="h3" gutterBottom color="textSecondary">
              {selectedPokemon.name}
            </Typography>
            <Stack direction="row" spacing={5}>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Height
              </Typography>
              <Typography
                align="justify"
                variant="h6"
                gutterBottom
                color="textSecondary"
              >
                {selectedPokemon.height}
              </Typography>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Base experience
              </Typography>
              <Typography variant="h6" gutterBottom color="textSecondary">
                {selectedPokemon.base_experience}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={5}>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Weight
              </Typography>
              <Typography variant="h6" gutterBottom color="textSecondary">
                {selectedPokemon.weight}
              </Typography>
              <Typography variant="h6" gutterBottom color="textPrimary">
                Ability
              </Typography>
              <Typography variant="h6" gutterBottom color="textSecondary">
                {selectedPokemon.abilities}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={5}>
              <IconButton onClick={handleClickLikeIcon}>
                <FavoriteIcon
                  color={selectedPokemon.isLiked ? "error" : "primary"}
                />
              </IconButton>
              {fightingPokemon.includes(selectedPokemon) ? (
                <IconButton onClick={handleClickFightIcon}>
                  <LocalFireDepartmentIcon
                    color={selectedPokemon.isFighting ? "error" : "primary"}
                  />
                </IconButton>
              ) : (
                fightingPokemon.length < 2 && (
                  <IconButton onClick={handleClickFightIcon}>
                    <LocalFireDepartmentIcon
                      color={selectedPokemon.isFighting ? "error" : "primary"}
                    />
                  </IconButton>
                )
              )}
              {isLogged && Object.keys(customizablePokemon).length === 0 ? (
                <IconButton onClick={handleClickBuildIcon}>
                  <BuildCircleIcon
                    color={selectedPokemon.isCustomizable ? "error" : "primary"}
                  />
                </IconButton>
              ) : (
                <IconButton></IconButton>
              )}
            </Stack>
            <Stack direction="row" spacing={5}>
              <Typography>{message}</Typography>
            </Stack>
            <Stack direction="row" spacing={5}>
              <Button variant="contained" onClick={handleClickButton}>
                Strona Główna
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default PokemonDetail;
