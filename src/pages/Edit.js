import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import addSchema from "../schemas/addSchema";
import { Box } from "@mui/system";

const Edit = ({ customizablePokemon }) => {
  const pokemon = customizablePokemon[0];

  const formik = useFormik({
    initialValues: {
      name: "",
      height: "",
      baseExperience: "",
      weight: "",
      ability: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
      fetch("http://localhost:8000/pokemons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }).then(() => {
        console.log("added");
      });
    },
    validationSchema: addSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box flex={6} p={2}>
        {pokemon ? (
          <Grid container spacing={2}>
            <Grid item>
              <Grid item xs={6}>
                <img
                  style={{ width: 450, height: 358 }}
                  src={pokemon.sprites.other.dream_world.front_default}
                  alt={pokemon.name}
                />
              </Grid>
            </Grid>
            <Grid item>
              <Grid item xs={8}>
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
              </Grid>
              <Grid item xs={8}>
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
              </Grid>
              <Grid item xs={8}>
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
              </Grid>
              <Grid item xs={8}>
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
              </Grid>
              <Grid item xs={8}>
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
              </Grid>
              <Grid item xs={8}>
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
          <Typography>
            <h3>No added Pokemon Yet!</h3>
          </Typography>
        )}
      </Box>
    </form>
  );
};

export default Edit;
