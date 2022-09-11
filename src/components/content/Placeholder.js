import { AspectRatio, Sheet } from "@mui/joy";
import { Typography } from "@mui/material";
import React from "react";

const Placeholder = () => {
  return (
    <Sheet
      sx={{
        borderRadius: "5px",
        width: "250px",
        height: "350px",
        backgroundColor: "lightgrey",
        textAlign: "center",
        padding: "10px",
        "&:hover": {
          width: "260px",
          height: "360px",
          boxShadow: "15px 15px 15px -10px tomato",
        },
      }}
    >
      <AspectRatio>
        <Typography level="h2" component="div">
          EditPokemon
        </Typography>
      </AspectRatio>
    </Sheet>
  );
};

export default Placeholder;
