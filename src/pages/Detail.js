import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { useNavigate } from "react-router-dom";

const PokemonDetail = ({
  selectedPokemon,
  setSelectedPokemon,
  favoritesPokemon,
  setFavoritesPokemon,
  fightingPokemon,
  setFightingPokemon,
}) => {
  const navigate = useNavigate();

  const handleClickLikeIcon = () => {
    setFavoritesPokemon(
      favoritesPokemon.includes(selectedPokemon)
        ? favoritesPokemon.filter(
            (pokemon) => pokemon.name !== selectedPokemon.name
          )
        : (favoritesPokemon) => [...favoritesPokemon, selectedPokemon]
    );
    selectedPokemon.isLiked = selectedPokemon.isLiked ? false : true;
    console.log(selectedPokemon);
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
    selectedPokemon.isFighting = selectedPokemon.isFighting ? false : true;
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
          <FavoriteIcon color={selectedPokemon.isLiked ? "error" : "primary"} />
        </IconButton>
        <IconButton onClick={handleClickFightIcon}>
          <VerifiedUserIcon
            color={selectedPokemon.isFighting ? "success" : "primary"}
          />
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
