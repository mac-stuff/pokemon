import { Box, Typography } from "@mui/material";
import React from "react";

const Rightbar = (isLogged) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      {isLogged ? (
        <Typography>You are logged.</Typography>
      ) : (
        <Typography>Please login.</Typography>
      )}
    </Box>
  );
};

export default Rightbar;
