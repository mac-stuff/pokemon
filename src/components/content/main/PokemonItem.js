import { Box, Card, CardContent, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import styled from "styled-components";

const CustomCard = styled(Card)({
  width: "230px",
  height: "350px",
  backgroundColor: "#eaece5 !important",
  textAlign: "center",
  padding: "15px",
  "&:hover": {
    width: "230px",
    height: "355px",
    boxShadow: "15px 15px 15px -10px #3b3a30",
  },
});

const CustomBox = styled(Box)({
  width: "230px",
  height: "140px",
});

const PokemonItem = ({ pokemon, setSelectedPokemon }) => {
  const clickHandle = () => {
    setSelectedPokemon(pokemon);
  };

  return (
    <CustomCard
      onClick={clickHandle}
      sx={{ opacity: pokemon.isLoser ? 0.2 : 1 }}
    >
      <CustomBox component="img" src={pokemon.sprites} alt={pokemon.name} />
      <CardContent>
        <Typography variant="h6" gutterBottom color="textSecondary">
          {pokemon.name}
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={6}
        >
          <Stack>
            <Typography variant="body2" gutterBottom color="textSecondary">
              {pokemon.height}
            </Typography>
            <Typography variant="body2" gutterBottom color="textPrimary">
              Height
            </Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">
              {pokemon.weight}
            </Typography>
            <Typography variant="body2" gutterBottom color="textPrimary">
              Weight
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="body2" gutterBottom color="textSecondary">
              {pokemon.base_experience}
            </Typography>
            <Typography variant="body2" gutterBottom color="textPrimary">
              Base experience
            </Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">
              {pokemon.abilities}
            </Typography>
            <Typography variant="body2" gutterBottom color="textPrimary">
              Ability
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </CustomCard>
  );
};

export default PokemonItem;
