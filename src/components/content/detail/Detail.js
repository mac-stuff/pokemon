import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import NotFound from "./NotFound";

const CustomButton = styled(Button)({
  width: "450px",
});

const CustomBox = styled(Box)({
  width: "450px",
  height: "385px",
});

const Detail = ({
  selectedPokemon,
  setSelectedPokemon,
  favoritesPokemon,
  setFavoritesPokemon,
  fightingPokemon,
  setFightingPokemon,
}) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleClickLike = async () => {
    await fetch(`http://localhost:8000/favorites?id=${selectedPokemon.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          selectedPokemon.isLiked = false;
          setFavoritesPokemon(
            favoritesPokemon.filter(
              (pokemon) => pokemon.name !== selectedPokemon.name
            )
          );
          removeFromDB("favorites", selectedPokemon);
        } else {
          selectedPokemon.isLiked = true;
          setFavoritesPokemon((favoritesPokemon) => [
            ...favoritesPokemon,
            selectedPokemon,
          ]);
          addToDB("favorites", selectedPokemon);
        }
      });
    localStorage.setItem("selectedPokemon", JSON.stringify(selectedPokemon));
  };

  const handleClickFight = async () => {
    await fetch(`http://localhost:8000/arena?id=${selectedPokemon.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          selectedPokemon.isFighting = false;
          setFightingPokemon(
            fightingPokemon.filter(
              (pokemon) => pokemon.name !== selectedPokemon.name
            )
          );
          removeFromDB("arena", selectedPokemon);
        } else {
          selectedPokemon.isFighting = true;
          setFightingPokemon((fightingPokemon) => [
            ...fightingPokemon,
            selectedPokemon,
          ]);
          addToDB("arena", selectedPokemon);
        }
      });
    localStorage.setItem("selectedPokemon", JSON.stringify(selectedPokemon));
  };

  const handleClickBackButton = () => {
    setSelectedPokemon({});
    navigate("/");
  };

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

  return Object.keys(selectedPokemon).length !== 0 ? (
    <Stack direction="row" spacing={5} mt={5} mb={5}>
      <Stack spacing={5} mt={5} mb={5}>
        <CustomBox
          component="img"
          src={selectedPokemon.sprites}
          alt={selectedPokemon.name}
        />
      </Stack>
      <Stack
        spacing={5}
        mt={5}
        mb={5}
        justifyContent="center"
        alignItems="center"
      >
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
          <IconButton onClick={handleClickLike}>
            <FavoriteIcon color={selectedPokemon.isLiked ? "grey" : "tomato"} />
          </IconButton>
          {fightingPokemon.length < 2 ? (
            <IconButton onClick={handleClickFight}>
              <LocalFireDepartmentIcon
                color={selectedPokemon.isFighting ? "grey" : "tomato"}
              />
            </IconButton>
          ) : (
            fightingPokemon.includes(selectedPokemon) && (
              <IconButton onClick={handleClickFight}>
                <LocalFireDepartmentIcon
                  color={selectedPokemon.isFighting ? "grey" : "tomato"}
                />
              </IconButton>
            )
          )}
        </Stack>
        <Stack direction="row" spacing={5}>
          <Typography>{message}</Typography>
        </Stack>
        <Stack direction="row" spacing={5}>
          <CustomButton variant="contained" onClick={handleClickBackButton}>
            MAIN PAGE
          </CustomButton>
        </Stack>
      </Stack>
    </Stack>
  ) : (
    <NotFound />
  );
};

export default Detail;

/* eslint-disable */
// const CustomFavoriteIcon = styled(FavoriteIcon)(({ isLiked }) => ({
//   color: isLiked ? "tomato" : "grey",
// }));

// const CustomFightIcon = styled(LocalFireDepartmentIcon)(({ isFighting }) => ({
//   color: isFighting ? "tomato" : "grey",
// }));
