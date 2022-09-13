import React, { useState } from "react";
import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import addSchema from "../schemas/addSchema";

const Edit = ({ customizablePokemon }) => {
  const pokemon = customizablePokemon[0];
  const [message, setMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      height: "",
      baseExperience: "",
      weight: "",
      ability: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(JSON.stringify(values));
      fetch("http://localhost:8000/pokemons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }).then(() => {
        setMessage("You successfully added new pokemon!");
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
            <Stack direction="row" spacing={5} mt={10} mb={10}>
              <img
                style={{ width: 450, height: 358 }}
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
              />
              <Stack>
                <Typography variant="body1" gutterBottom color="textPrimary">
                  change name
                </Typography>
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
                <Typography variant="body1" gutterBottom color="textPrimary">
                  change height
                </Typography>
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
                <Typography variant="body1" gutterBottom color="textPrimary">
                  change base experience
                </Typography>
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
              <Stack>
                <Typography variant="body1" gutterBottom color="textPrimary">
                  change weigth
                </Typography>
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
                <Typography variant="body1" gutterBottom color="textPrimary">
                  change ability
                </Typography>
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
                <Typography>{message}</Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      ) : (
        <Typography>
          <h3>No added Pokemon Yet!</h3>
        </Typography>
      )}
    </form>
  );
};

export default Edit;
