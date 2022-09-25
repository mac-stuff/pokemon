import { Button } from "@mui/material";
import React, { Fragment } from "react";

const Pagination = ({ pokemonPerPage, totalPokemon, setCurrentPage }) => {
  const pageNumber = [];

  for (let i = 1; i < Math.ceil(totalPokemon / pokemonPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <Fragment>
      {pageNumber.map((number) => {
        return (
          <Button
            key={number}
            variant="contained"
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </Button>
        );
      })}
    </Fragment>
  );
};

export default Pagination;
