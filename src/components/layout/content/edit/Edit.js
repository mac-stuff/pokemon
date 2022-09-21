import React, { useEffect, useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import addSchema from "../../../../schemas/addSchema";
import styled from "styled-components";
import PokemonItemSmall from "./PokemonItemSmall";

const CustomBox = styled(Box)({
  width: "450px",
  height: "385px",
});

const Edit = ({ allPokemon }) => {
  const [customPokemon, setCustomPokemon] = useState(() => {
    const localData = localStorage.getItem("customPokemon");
    return localData ? JSON.parse(localData) : {};
  });

  useEffect(() => {
    localStorage.setItem("customPokemon", JSON.stringify(customPokemon));
  }, [customPokemon]);

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
        setCustomPokemon({});
        resetForm({ values: "" });
      });
    },
    validationSchema: addSchema,
  });

  const handleClickClear = () => {
    setCustomPokemon({});
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      {Object.keys(customPokemon).length !== 0 ? (
        <Grid container spacing={3} direction="row" alignItems="center" m={5}>
          <Grid item xs={5} m={2}>
            <CustomBox
              component="img"
              src={customPokemon.sprites}
              alt={customPokemon.name}
            />
          </Grid>
          <Grid item xs={6} >
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
        <Grid container spacing={3} direction="row" alignItems="center" m={5}>
          {allPokemon.map((pokemon) => (
            <Grid item key={pokemon.name}>
              <PokemonItemSmall
                pokemon={pokemon}
                setCustomPokemon={setCustomPokemon}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </form>
  );
};

export default Edit;
