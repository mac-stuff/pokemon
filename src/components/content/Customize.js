import { Button, Grid, Stack, Typography } from "@mui/material";

const Customize = ({ customizablePokemon }) => {
  const pokemon = customizablePokemon[0];
  const handleClickButton = () => {
    console.log("clicked");
  };

  return (
    <Grid item xs="auto">
      {customizablePokemon.length > 0 ? (
        <Stack direction="row" spacing={10} mt={10} mb={10}>
          <img
            style={{ width: 450, height: 358 }}
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
          />
          <Stack spacing={5} mt={5} mb={5}>
            <Typography variant="h4" gutterBottom color="textSecondary">
              {pokemon.name}
            </Typography>
            <Stack direction="row" spacing={5}>
              <Typography
                align="justify"
                variant="body1"
                gutterBottom
                color="textSecondary"
              >
                {pokemon.height}
              </Typography>
              <Typography variant="body1" gutterBottom color="textSecondary">
                {pokemon.base_experience}
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
                {pokemon.weight}
              </Typography>
              <Typography variant="body1" gutterBottom color="textSecondary">
                {pokemon.abilities[0] && pokemon.abilities[0].ability.name}
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
                CUSTOMIZE
              </Button>
            </Stack>
          </Stack>
        </Stack>
      ) : (
        <Typography>No added Pokemon Yet!</Typography>
      )}
    </Grid>
  );
};

export default Customize;
