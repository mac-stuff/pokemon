import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import addSchema from "../../../../schemas/addSchema";
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

  const handleClickClear = () => {
    setCustomPokemon([]);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      {pokemon ? (
        <Grid container spacing={3} direction="row" alignItems="center" m={5}>
          <Grid item xs={5} m={2}>
            <CustomBox
              component="img"
              src={pokemon.sprites}
              alt={pokemon.name}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="change name"
              margin="normal"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              onBlur={formik.handleBlur}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              fullWidth
              id="height"
              name="height"
              label="change height"
              margin="normal"
              value={formik.values.height}
              onChange={formik.handleChange}
              error={formik.touched.height && Boolean(formik.errors.height)}
              onBlur={formik.handleBlur}
              helperText={formik.touched.height && formik.errors.height}
            />
            <TextField
              fullWidth
              id="baseExperience"
              name="baseExperience"
              label="change experience"
              margin="normal"
              value={formik.values.baseExperience}
              onChange={formik.handleChange}
              error={
                formik.touched.baseExperience &&
                Boolean(formik.errors.baseExperience)
              }
              onBlur={formik.handleBlur}
              helperText={
                formik.touched.baseExperience && formik.errors.baseExperience
              }
            />
            <TextField
              fullWidth
              id="weight"
              name="weight"
              label="change weigth"
              margin="normal"
              value={formik.values.weight}
              onChange={formik.handleChange}
              error={formik.touched.weight && Boolean(formik.errors.weight)}
              onBlur={formik.handleBlur}
              helperText={formik.touched.weight && formik.errors.weight}
            />
            <TextField
              fullWidth
              id="ability"
              name="ability"
              label="change ability"
              margin="normal"
              value={formik.values.ability}
              onChange={formik.handleChange}
              error={formik.touched.ability && Boolean(formik.errors.ability)}
              onBlur={formik.handleBlur}
              helperText={formik.touched.ability && formik.errors.ability}
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleClickClear}
            >
              CANCEL
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={!formik.isValid}
            >
              SUBMIT
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Typography>{message}</Typography>
      )}
    </form>
  );
};

export default Edit;
