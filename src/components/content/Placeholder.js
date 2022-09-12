import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const CustomTypography = styled(Typography)({
  borderRadius: "5px",
  width: "250px",
  height: "350px",
  backgroundColor: "#eaece5",
  textAlign: "center",
  padding: "10px",
  "&:hover": {
    width: "260px",
    height: "360px",
    boxShadow: "15px 15px 15px -10px #3b3a30",
  },
});
const Placeholder = () => {
  return (
    <CustomTypography level="h2" component="div">
      Add Pokemon
    </CustomTypography>
  );
};

export default Placeholder;
