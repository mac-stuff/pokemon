import { Box } from "@mui/system";
import React from "react";
import Customize from "../components/content/Customize";

const Add = ({ customizablePokemon, isLogged }) => {
  return (
    <Box flex={6} p={2}>
      Add Pokemon
      <Customize
        isLogged={isLogged}
        customizablePokemon={customizablePokemon}
      />
    </Box>
  );
};

export default Add;
