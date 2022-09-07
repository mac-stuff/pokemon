import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";

const Customize = ({ customizablePokemon, isLogged }) => {
  const handleClickButton = () => {};

  const handleClickBuildIcon = () => {};

  return (
    <Grid item xs="auto">
      {isLogged && <Typography>Logged </Typography>}
      {customizablePokemon.length > 0 ? (
        <Typography>{customizablePokemon[0].name}</Typography>
      ) : (
        <Typography>No added Pokemon Yet!</Typography>
      )}
    </Grid>
  );
};

export default Customize;

// {customizablePokemon &&
//   <Typography> {customizablePokemon.name} </Typography>}
// <Stack direction="row" spacing={10} mt={10} mb={10}>
//   <img
//     style={{ width: 450, height: 358 }}
//     src={customizablePokemon.sprites.other.dream_world.front_default}
//     alt={customizablePokemon.name}
//   />
//   <Stack spacing={5} mt={5} mb={5}>
//     <Typography variant="h3" gutterBottom color="textSecondary">
//       {customizablePokemon.name[0].toUpperCase() +
//         customizablePokemon.name.substring(1)}
//     </Typography>
//     <Stack direction="row" spacing={5}>
//       <Typography
//         align="justify"
//         variant="body1"
//         gutterBottom
//         color="textSecondary"
//       >
//         {customizablePokemon.height}
//       </Typography>
//       <Typography variant="body1" gutterBottom color="textSecondary">
//         {customizablePokemon.base_experience}
//       </Typography>
//     </Stack>
//     <Stack direction="row" spacing={5}>
//       <Typography variant="body1" gutterBottom color="textPrimary">
//         Height
//       </Typography>
//       <Typography variant="body1" gutterBottom color="textPrimary">
//         Base experience
//       </Typography>
//     </Stack>
//     <Stack direction="row" spacing={5}>
//       <Typography variant="body1" gutterBottom color="textSecondary">
//         {customizablePokemon.weight}
//       </Typography>
//       <Typography variant="body1" gutterBottom color="textSecondary">
//         {customizablePokemon.abilities[0] &&
//           customizablePokemon.abilities[0].ability.name}
//       </Typography>
//     </Stack>
//     <Stack direction="row" spacing={5}>
//       <Typography variant="body1" gutterBottom color="textPrimary">
//         Weight
//       </Typography>
//       <Typography variant="body1" gutterBottom color="textPrimary">
//         Ability
//       </Typography>
//       <IconButton onClick={handleClickBuildIcon}>
//         <BuildCircleIcon
//           color={
//             customizablePokemon.isCustomizable ? "success" : "primary"
//           }
//         />
//       </IconButton>
//       <Button variant="contained">CUSTOMIZE</Button>
//       <Stack direction="row" spacing={5} mt={5} mb={5}>
//         <Button variant="contained" onClick={handleClickButton}>
//           Strona Główna
//         </Button>
//       </Stack>
//     </Stack>
//   </Stack>
// </Stack>
