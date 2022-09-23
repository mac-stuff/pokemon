import React, { useEffect, useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import addSchema from "../../../schemas/addSchema";
import styled from "styled-components";
import PokemonItemSmall from "./PokemonItemSmall";

const CustomBox = styled(Box)({
  width: "450px",
  height: "385px",
});

const Edit = ({ allPokemon, searchedPokemon }) => {
  const [editedPokemon, setEditedPokemon] = useState(() => {
    const localData = localStorage.getItem("editedPokemon");
    return localData ? JSON.parse(localData) : {};
  });

  useEffect(() => {
    localStorage.setItem("editedPokemon", JSON.stringify(editedPokemon));
  }, [editedPokemon]);

  const formik = useFormik({
    initialValues: {
      name: "",
      height: "",
      base_experience: "",
      weight: "",
      abilities: "",
      sprites: editedPokemon.sprites,
      id: editedPokemon.id + 200,
    },
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => {
      fetch("http://localhost:8000/edited", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }).then(() => {
        setEditedPokemon({});
        resetForm({ values: "" });
      });
    },
    validationSchema: addSchema,
  });

  const handleClickClear = () => {
    setEditedPokemon({});
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      {Object.keys(editedPokemon).length !== 0 ? (
        <Grid container spacing={3} direction="row" alignItems="center" m={5}>
          <Grid item xs={5} m={2}>
            <CustomBox
              component="img"
              src={editedPokemon.sprites}
              alt={editedPokemon.name}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography>{editedPokemon.name}</Typography>
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
            <Typography>{editedPokemon.height}</Typography>
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
            <Typography>{editedPokemon.base_experience}</Typography>
            <TextField
              fullWidth
              id="base_experience"
              name="base_experience"
              label="change base experience"
              margin="normal"
              value={formik.values.base_experience}
              onChange={formik.handleChange}
              error={
                formik.touched.base_experience &&
                Boolean(formik.errors.base_experience)
              }
              onBlur={formik.handleBlur}
              helperText={
                formik.touched.base_experience && formik.errors.base_experience
              }
            />
            <Typography>{editedPokemon.weight}</Typography>
            <TextField
              fullWidth
              id="weight"
              name="weight"
              label="change weight"
              margin="normal"
              value={formik.values.weight}
              onChange={formik.handleChange}
              error={formik.touched.weight && Boolean(formik.errors.weight)}
              onBlur={formik.handleBlur}
              helperText={formik.touched.weight && formik.errors.weight}
            />
            <Typography>{editedPokemon.abilities}</Typography>
            <TextField
              fullWidth
              id="abilities"
              name="abilities"
              label="change abilities"
              margin="normal"
              value={formik.values.abilities}
              onChange={formik.handleChange}
              error={
                formik.touched.abilities && Boolean(formik.errors.abilities)
              }
              onBlur={formik.handleBlur}
              helperText={formik.touched.abilities && formik.errors.abilities}
            />
          </Grid>
          <Grid container spacing={3} mt={4}>
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
        </Grid>
      ) : (
        <Grid container spacing={3} direction="row" alignItems="center" m={1}>
          {searchedPokemon
            ? allPokemon
                .filter((pokemon) =>
                  pokemon.name.startsWith(
                    searchedPokemon[0].toUpperCase() +
                      searchedPokemon.substring(1)
                  )
                )
                .map((pokemon) => (
                  <Grid item key={pokemon.name}>
                    <PokemonItemSmall
                      pokemon={pokemon}
                      setEditedPokemon={setEditedPokemon}
                    />
                  </Grid>
                ))
            : allPokemon.map((pokemon) => (
                <Grid item key={pokemon.name}>
                  <PokemonItemSmall
                    pokemon={pokemon}
                    setEditedPokemon={setEditedPokemon}
                  />
                </Grid>
              ))}
        </Grid>
      )}
    </form>
  );
};

export default Edit;
