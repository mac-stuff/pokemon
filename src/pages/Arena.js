import { Box, Button, Grid, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import Placeholder from "../components/content/Placeholder";
import PokemonList from "../components/content/PokemonList";
import DeleteIcon from "@mui/icons-material/Delete";

const Arena = ({
  fightingPokemon,
  searchedPokemon,
  setCurrentPage,
  prevPage,
  nextPage,
  allPokemon,
  setSelectedPokemon,
  setFightingPokemon,
}) => {
  const [message, setMessage] = useState(
    <Typography>Press button to fight!</Typography>
  );
  const [firstPokemonWon, setFirstPokemonWon] = useState(false);
  const [isAfterFight, setIsAfterFight] = useState(false);

  const handleClickFight = () => {
    Math.round(fightingPokemon[0].base_experience * fightingPokemon[0].weight) >
    Math.round(fightingPokemon[1].base_experience * fightingPokemon[1].weight)
      ? setFirstPokemonWon(true)
      : Math.round(
          fightingPokemon[0].base_experience * fightingPokemon[0].weight
        ) ===
          Math.round(
            fightingPokemon[1].base_experience * fightingPokemon[1].weight
          ) && setMessage(<Typography>Draw!</Typography>);
    firstPokemonWon
      ? setMessage(
          <Typography>
            Pokemon - {fightingPokemon[0].name.toUpperCase()} Won!
          </Typography>
        )
      : setMessage(
          <Typography>
            Pokemon - {fightingPokemon[1].name.toUpperCase()} Won!
          </Typography>
        );
    setIsAfterFight(true);
    firstPokemonWon
      ? (fightingPokemon[1].isLoser = true)
      : (fightingPokemon[0].isLoser = true);
  };

  const handleClickDeleteIcon = () => {
    fightingPokemon[0].isLoser
      ? (fightingPokemon[1].base_experience =
          fightingPokemon[1].base_experience + 10)
      : (fightingPokemon[0].base_experience =
          fightingPokemon[0].base_experience + 10);
    !fightingPokemon[0].isLoser
      ? (fightingPokemon[0].fights_won = fightingPokemon[0].fights_won + 1)
      : (fightingPokemon[0].fights_lost = fightingPokemon[0].fights_lost + 1);
    !fightingPokemon[1].isLoser
      ? (fightingPokemon[1].fights_won = fightingPokemon[1].fights_won + 1)
      : (fightingPokemon[1].fights_lost = fightingPokemon[1].fights_lost + 1);
    fightingPokemon[0].isFighting = false;
    fightingPokemon[1].isFighting = false;
    fightingPokemon[0].isLoser = false;
    fightingPokemon[1].isLoser = false;

    setFightingPokemon([]);
  };

  return (
    <Box flex={6} p={2}>
      {fightingPokemon.length === 2 ? (
        <Fragment>
          <PokemonList
            searchedPokemon={searchedPokemon}
            currentPagePokemon={fightingPokemon}
            setCurrentPage={setCurrentPage}
            prevPage={prevPage}
            nextPage={nextPage}
            allPokemon={allPokemon}
            setSelectedPokemon={setSelectedPokemon}
          />
          <Button variant="contained" onClick={handleClickFight}>
            WALCZ
          </Button>
          {message}
          {isAfterFight && (
            <Button variant="contained" onClick={handleClickDeleteIcon}>
              Opuść arenę <DeleteIcon color="error" />
            </Button>
          )}
        </Fragment>
      ) : (
        <Fragment>
          <h2>No Fighting Pokemon Yet!</h2>
        </Fragment>
      )}

      {fightingPokemon.length === 1 && (
        <Grid container spacing={2}>
          <Grid item>
            <PokemonList
              searchedPokemon={searchedPokemon}
              currentPagePokemon={fightingPokemon}
              setCurrentPage={setCurrentPage}
              prevPage={prevPage}
              nextPage={nextPage}
              allPokemon={allPokemon}
              setSelectedPokemon={setSelectedPokemon}
            />
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
