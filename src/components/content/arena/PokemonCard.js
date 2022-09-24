import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Fragment } from "react";
import styled from "styled-components";

const CustomCard = styled(Card)({
  width: "230px",
  height: "350px",
  backgroundColor: "#eaece5 !important",
  textAlign: "center",
  padding: "15px",
  "&:hover": {
    width: "230px",
    height: "360px",
    boxShadow: "15px 15px 15px -10px #3b3a30",
  },
});

const CustomBox = styled(Box)({
  width: "250px",
  height: "158px",
});

const CustomIconButton = styled(IconButton)({
  position: "absolute !important",
  marginTop: "0 !important",
});

const PokemonCard = ({ pokemon, fightingPokemon, setFightingPokemon }) => {
  const clickHandle = () => {
    setFightingPokemon(
      fightingPokemon.filter((item) => item.name !== pokemon.name)
    );
  };

  return (
    <Fragment>
      <CustomCard sx={{ opacity: pokemon.isLoser ? 0.2 : 1 }}>
        <CustomIconButton onClick={clickHandle}>
          <CloseIcon />
        </CustomIconButton>
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
    </Fragment>
  );
};

export default PokemonCard;
