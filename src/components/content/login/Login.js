import { Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import loginSchema from "../../../schemas/loginSchema";

const CustomGrid = styled(Grid)({
  paddingTop: "100px",
  paddingBottom: "25px",
});

const Login = ({ setisLoggedIn }) => {
  const [message, setMessage] = useState();
  const navigate = useNavigate();

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
                  "Login or password are incorrect. Please try again."
                );
          });
      } catch (error) {
        console.log(error.stack);
      }
    },
    validationSchema: loginSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <CustomGrid container spacing={2}>
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
        <Grid item xs={10}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={!formik.isValid}
          >
            LOGIN
          </Button>
        </Grid>
        <Grid item xs={10}>
          <Typography>{message}</Typography>
        </Grid>
      </CustomGrid>
    </form>
  );
};

export default Login;
