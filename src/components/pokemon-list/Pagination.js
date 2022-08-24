import { Button, Stack } from "@mui/material";
import React from "react";

const Pagination = ({ setCurrentPage, prevPage, nextPage }) => {
  const handleButtonPrevPage = () => {
    setCurrentPage(prevPage);
  };

  const handleButtonNextPage = () => {
    setCurrentPage(nextPage);
  };

  return (
    <Stack direction="row" spacing={1} justifyContent="space-between">
      {prevPage && <Button onClick={handleButtonPrevPage}>prev</Button>}
      {nextPage && <Button onClick={handleButtonNextPage}>next</Button>}
    </Stack>
  );
};

export default Pagination;
