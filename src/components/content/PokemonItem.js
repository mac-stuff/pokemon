import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import styled from "styled-components";

const CustomCard = styled(Card)({
  width: "250px",
  height: "350px",
  backgroundColor: "#eaece5",
  textAlign: "center",
  padding: "10px",
  "&:hover": {
    width: "260px",
    height: "360px",
    boxShadow: "15px 15px 15px -10px #3b3a30",
  },
});

const PokemonItem = ({ pokemon, setSelectedPokemon }) => {
  const clickHandle = () => {
    setSelectedPokemon(pokemon);
  };

  return (
    <CustomCard>
      <CardActionArea
        onClick={clickHandle}
        sx={{ opacity: pokemon.isLoser ? 0.2 : 1 }}
      >
        <img
          style={{ width: 250, height: 158 }}
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom color="textSecondary">
            {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
          </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Stack>
              <Typography variant="body2" gutterBottom color="textSecondary">
                {pokemon.height}
              </Typography>
              <Typography variant="body2" gutterBottom color="textPrimary">
                Height
              </Typography>
            </Stack>
            <Stack>
              <Typography variant="body2" gutterBottom color="textSecondary">
                {pokemon.base_experience}
              </Typography>
              <Typography variant="body2" gutterBottom color="textPrimary">
                Base experience
              </Typography>
            </Stack>
          </Stack>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={6}
          >
            <Stack>
              <Typography variant="body2" gutterBottom color="textSecondary">
                {pokemon.weight}
              </Typography>
              <Typography variant="body2" gutterBottom color="textPrimary">
                Weight
              </Typography>
            </Stack>
            <Stack>
              <Typography variant="body2" gutterBottom color="textSecondary">
                {pokemon.abilities[0] && pokemon.abilities[0].ability.name}
              </Typography>
              <Typography variant="body2" gutterBottom color="textPrimary">
                Ability
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </CustomCard>
  );
};

export default PokemonItem;
