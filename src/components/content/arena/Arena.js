import { Box, Button, Grid, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import Placeholder from "./Placeholder";
import PokemonCard from "./PokemonCard";

const Arena = ({ fightingPokemon, setFightingPokemon }) => {
  const [message, setMessage] = useState();
  const [isAfterFight, setIsAfterFight] = useState(false);

  const handleClickFight = () => {
    if (
      Math.round(
        fightingPokemon[0].base_experience * fightingPokemon[0].weight
      ) >
      Math.round(fightingPokemon[1].base_experience * fightingPokemon[1].weight)
    ) {
      setMessage(`Pokemon - ${fightingPokemon[0].name.toUpperCase()} Won!`);
      fightingPokemon[1].isLoser = true;
    } else if (
      Math.round(
        fightingPokemon[0].base_experience * fightingPokemon[0].weight
      ) ===
      Math.round(fightingPokemon[1].base_experience * fightingPokemon[1].weight)
    ) {
      setMessage("Draw!");
    } else {
      setMessage(`Pokemon - ${fightingPokemon[1].name.toUpperCase()} Won!`);
      fightingPokemon[0].isLoser = true;
    }
    setIsAfterFight(true);
  };

  const handleClickDelete = () => {
    if (fightingPokemon[0].isLoser) {
      fightingPokemon[1].base_experience =
        fightingPokemon[1].base_experience + 10;
      fightingPokemon[1].fights_won = fightingPokemon[1].fights_won + 1;
      fightingPokemon[0].fights_lost = fightingPokemon[0].fights_lost + 1;
    } else {
      fightingPokemon[0].base_experience =
        fightingPokemon[0].base_experience + 10;
      fightingPokemon[0].fights_won = fightingPokemon[0].fights_won + 1;
      fightingPokemon[1].fights_lost = fightingPokemon[1].fights_lost + 1;
    }
    fightingPokemon[0].isFighting = false;
    fightingPokemon[1].isFighting = false;
    fightingPokemon[0].isLoser = false;
    fightingPokemon[1].isLoser = false;
    setFightingPokemon([]);
  };

  return (
    <Box>
      {fightingPokemon.length === 2 && (
        <Fragment>
          <Grid container spacing={2}>
            <Grid item>
              <PokemonCard
                pokemon={fightingPokemon[0]}
                fightingPokemon={fightingPokemon}
                setFightingPokemon={setFightingPokemon}
              ></PokemonCard>
            </Grid>
            <Grid item>
              <PokemonCard
                pokemon={fightingPokemon[1]}
                fightingPokemon={fightingPokemon}
                setFightingPokemon={setFightingPokemon}
              ></PokemonCard>
            </Grid>
          </Grid>
          <Grid mt={2} container spacing={2}>
            <Grid item xs={12}>
              {isAfterFight ? (
                <Button variant="contained" onClick={handleClickDelete}>
                  CLEAN
                </Button>
              ) : (
                <Button variant="contained" onClick={handleClickFight}>
                  FIGHT
                </Button>
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography>{message}</Typography>
            </Grid>
          </Grid>
        </Fragment>
      )}

      {fightingPokemon.length === 1 && (
        <Grid container spacing={2}>
          <Grid item>
            <PokemonCard
              pokemon={fightingPokemon[0]}
              fightingPokemon={fightingPokemon}
              setFightingPokemon={setFightingPokemon}
            ></PokemonCard>
          </Grid>
          <Grid item>
            <Placeholder />
          </Grid>
        </Grid>
      )}

      {fightingPokemon.length === 0 && (
        <Grid container spacing={2}>
          <Grid item>
            <Placeholder />
          </Grid>
          <Grid item>
            <Placeholder />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Arena;
