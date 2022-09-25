import { Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import loginSchema from "../../../schemas/loginSchema";

const Login = ({ setisLoggedIn }) => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  ("please login");

  const successfulLogin = () => {
    setisLoggedIn(true);
    navigate("/Edit");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      try {
        fetch(`http://localhost:8000/users?email=${values.email}`)
          .then((res) => res.json())
          .then((data) => {
            data.length === 1 && data[0].password === values.password
              ? successfulLogin()
              : setMessage(
                  "login or password are incorrect, please try again."
                );
          });
      } catch (error) {
        console.log(error.stack);
      }
    },
    validationSchema: loginSchema,
  });

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} mt={5}>
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
          <Grid item>
            <TextField
              id="password"
              name="password"
              label="password"
              margin="normal"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              onBlur={formik.handleBlur}
              helperText={formik.touched.password && formik.errors.password}
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
              LOGIN
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

export default Login;
