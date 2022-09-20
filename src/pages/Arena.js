import { Box, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import Placeholder from "../components/content/Placeholder";
import Main from "./Main";

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
    fetch(`http://localhost:8000/arena/${fightingPokemon[0].id}/`, {
      method: "DELETE",
    });
    fetch(`http://localhost:8000/arena/${fightingPokemon[1].id}/`, {
      method: "DELETE",
    });
    setFightingPokemon([]);
  };

  return (
    <Box flex={6} p={2}>
      {fightingPokemon.length === 2 && (
        <Grid container spacing={2} direction="column">
          <Grid item>
            <Main
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
          <Grid item>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      )}

      {fightingPokemon.length === 1 && (
        <Grid container spacing={2}>
          <Grid item>
            <Main
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
