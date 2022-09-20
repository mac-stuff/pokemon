import React, { useState } from "react";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import addSchema from "../schemas/addSchema";
import styled from "styled-components";

const CustomBox = styled(Box)({
  width: "450px",
  height: "385px",
});

const Edit = ({ customPokemon, setCustomPokemon }) => {
  const pokemon = customPokemon[0];
  const [message, setMessage] = useState("No Pokemon To Edit Yet!");

  const formik = useFormik({
    initialValues: {
      name: "",
      height: "",
      baseExperience: "",
      weight: "",
      ability: "",
    },
    onSubmit: (values, { resetForm }) => {
      fetch("http://localhost:8000/createdPokemons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }).then(() => {
        setMessage("You successfully added new Pokemon to data base!");
        setCustomPokemon([]);
        resetForm({ values: "" });
      });
    },
    validationSchema: addSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {pokemon ? (
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs="auto">
            <Stack direction="row" spacing={5} mt={5} mb={5}>
              <Stack spacing={5} mt={5} mb={5}>
                <CustomBox
                  component="img"
                  src={pokemon.sprites}
                  alt={pokemon.name}
                />
              </Stack>
              <Stack spacing={5} mt={5} mb={5}>
                <Typography variant="body1">change name</Typography>
                <TextField
                  id="name"
                  name="name"
                  label="name"
                  margin="normal"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <Typography variant="body1">change height</Typography>
                <TextField
                  id="height"
                  name="height"
                  label="height"
                  margin="normal"
                  value={formik.values.height}
                  onChange={formik.handleChange}
                  error={formik.touched.height && Boolean(formik.errors.height)}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.height && formik.errors.height}
                />
                <Typography variant="body1">change base experience</Typography>
                <TextField
                  id="baseExperience"
                  name="baseExperience"
                  label="baseExperience"
                  margin="normal"
                  value={formik.values.baseExperience}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.baseExperience &&
                    Boolean(formik.errors.baseExperience)
                  }
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.baseExperience &&
                    formik.errors.baseExperience
                  }
                />
              </Stack>
              <Stack spacing={5} mt={5} mb={5}>
                <Typography variant="body1">change weigth</Typography>
                <TextField
                  id="weight"
                  name="weight"
                  label="weight"
                  margin="normal"
                  value={formik.values.weight}
                  onChange={formik.handleChange}
                  error={formik.touched.weight && Boolean(formik.errors.weight)}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.weight && formik.errors.weight}
                />
                <Typography variant="body1">change ability</Typography>
                <TextField
                  id="ability"
                  name="ability"
                  label="ability"
                  margin="normal"
                  value={formik.values.ability}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.ability && Boolean(formik.errors.ability)
                  }
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.ability && formik.errors.ability}
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={!formik.isValid}
                >
                  SUBMIT
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  // disabled={!formik.isValid}
                >
                  EDIT
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      ) : (
        <Typography>{message}</Typography>
      )}
    </form>
  );
};

export default Edit;
