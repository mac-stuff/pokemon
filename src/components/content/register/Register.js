import { Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { Fragment, useState } from "react";
import registerSchema from "../../../schemas/registerSchema";

const Register = () => {
  const [message, setMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values, { resetForm }) => {
      fetch("http://localhost:8000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }).then(() => {
        setMessage("You are successfully register now, please login.");
        resetForm({ values: "" });
      });
    },
    validationSchema: registerSchema,
  });

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} mt={5}>
          <Grid item>
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
          <Grid item>
            <TextField
              id="email"
              name="email"
              label="email"
              margin="normal"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              onBlur={formik.handleBlur}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item>
            <TextField
              id="password"
              name="password"
              label="password"
              margin="normal"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              onBlur={formik.handleBlur}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid item>
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              label="confirm password"
              margin="normal"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              onBlur={formik.handleBlur}
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            />
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={12}>
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
        <Grid container mt={2}>
          <Grid item xs={12}>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};

export default Register;
