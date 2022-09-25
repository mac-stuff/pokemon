import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import NotFound from "./NotFound";

const CustomButton = styled(Button)({
  width: "450px",
  "@media (max-width: 780px)": {
    width: "250px",
  },
  "@media (max-width: 360px)": {
    width: "150px",
  },
});

const CustomBox = styled(Box)({
  width: "450px",
  height: "385px",
  "@media (max-width: 780px)": {
    width: "250px",
    height: "185px",
  },
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
  const [message, setMessage] = useState(
    "Add Pokemon to favorites or to arena by clicking on the heart or fire icons."
  );

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

  const handleClickInactive = () => {
    setMessage("You can't add Pokemon, the list of fighting pokemons is full.");
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
    <Grid container mt={5} justifyContent="center" direction="row">
      <Grid item mt={5}>
        <CustomBox
          component="img"
          src={selectedPokemon.sprites}
          alt={selectedPokemon.name}
        />
      </Grid>
      <Grid item mt={5}>
        <Typography variant="h3" gutterBottom color="textSecondary">
          {selectedPokemon.name}
        </Typography>
        <Grid container justifyContent="center" spacing={2} mt={5}>
          <Grid item m={2} xs={7} md={5}>
            <Typography variant="h6" gutterBottom color="textSecondary">
              {selectedPokemon.height}
            </Typography>
            <Typography variant="h6" gutterBottom color="textPrimary">
              Height
            </Typography>
            <Typography variant="h6" gutterBottom color="textSecondary">
              {selectedPokemon.weight}
            </Typography>
            <Typography variant="h6" gutterBottom color="textPrimary">
              Weight
            </Typography>
          </Grid>
          <Grid item m={2} xs={7} md={5}>
            <Typography variant="h6" gutterBottom color="textSecondary">
              {selectedPokemon.base_experience}
            </Typography>
            <Typography variant="h6" gutterBottom color="textPrimary">
              Base experience
            </Typography>
            <Typography variant="h6" gutterBottom color="textSecondary">
              {selectedPokemon.abilities}
            </Typography>
            <Typography variant="h6" gutterBottom color="textPrimary">
              Ability
            </Typography>
          </Grid>
          <Grid item xs={7} md={5}>
            <IconButton onClick={handleClickLike}>
              <FavoriteIcon
                color={selectedPokemon.isLiked ? "error" : "primary"}
              />
            </IconButton>
            {fightingPokemon.length < 2 ? (
              <IconButton onClick={handleClickFight}>
                <LocalFireDepartmentIcon
                  color={selectedPokemon.isFighting ? "error" : "primary"}
                />
              </IconButton>
            ) : (
              <IconButton onClick={handleClickInactive}>
                <LocalFireDepartmentIcon color="inherit" />
              </IconButton>
            )}
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" direction="column" mt={2}>
        <Grid item mt={2}>
          <Typography>{message}</Typography>
        </Grid>
        <Grid item mt={2}>
          <CustomButton variant="contained" onClick={handleClickBackButton}>
            MAIN PAGE
          </CustomButton>
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <NotFound />
  );
};

export default Detail;
