import { Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import loginSchema from "../schemas/loginSchema";

const Login = ({ setIsLogged, setLoggetUser }) => {
  const navigate = useNavigate();

  const successfulLogin = (values) => {
    console.log("hell yeah!");
    setLoggetUser(values);
    setIsLogged(true);
    navigate("/Edycja");
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
              ? successfulLogin(values)
              : console.log("hell no!");
          });
      } catch (error) {
        console.log(error.stack);
      }
    },
    validationSchema: loginSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
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
        <Grid item xs={12}>
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
    </form>
  );
};

export default Login;
