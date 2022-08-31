import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import Placeholder from "../components/content/Placeholder";
import PokemonList from "../components/content/PokemonList";
import DeleteIcon from "@mui/icons-material/Delete";
import NewsOfVictory from "../components/content/NewsOfVictory";

const Stage = ({
  fightingPokemon,
  searchedPokemon,
  setCurrentPage,
  prevPage,
  nextPage,
  allPokemon,
  setSelectedPokemon,
  setLoserPokemon,
  setFightingPokemon,
}) => {
  const [message, setMessage] = useState(
    <Typography>Press button to fight!</Typography>
  );
  const [isAfterFight, setIsAfterFight] = useState(false);

  const handleClickFight = () => {
    const firstPokemonWon = false;

    Math.round(fightingPokemon[0].base_experience * fightingPokemon[0].weight) >
    Math.round(fightingPokemon[1].base_experience * fightingPokemon[1].weight)
      ? (firstPokemonWon = true)
      : Math.round(
          fightingPokemon[0].base_experience * fightingPokemon[0].weight
        ) ===
          Math.round(
            fightingPokemon[1].base_experience * fightingPokemon[1].weight
          ) && setMessage(<Typography>Draw!</Typography>);

    firstPokemonWon
      ? setMessage(
          <Typography>Pokemon - {fightingPokemon[0].name} Won!</Typography>
        )
      : setMessage(
          <Typography>Pokemon - {fightingPokemon[1].name} Won!</Typography>
        );

    setIsAfterFight(true);
    setLoserPokemon(firstPokemonWon ? fightingPokemon[1] : fightingPokemon[0]);
  };

  const handleClickDeleteIcon = () => {
    fightingPokemon[0].isFighting = false;
    fightingPokemon[1].isFighting = false;
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
            <IconButton onClick={handleClickDeleteIcon}>
              <DeleteIcon color="error" />
            </IconButton>
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

export default Stage;
