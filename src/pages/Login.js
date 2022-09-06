import { Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import * as EmailValidator from "email-validator";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLogged }) => {
  const navigate = useNavigate();

  const loginSchema = yup.object().shape({
    email: yup.string().required("required email"),
    password: yup.string().required("required password"),
  });

  const validateSchema = (values) => {
    let errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!EmailValidator.validate(values.email)) {
      errors.email = "Invalid email address.";
    }
    const passwordRegex = /(?=.*[0-9])/;
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be 8 characters long.";
    } else if (!passwordRegex.test(values.password)) {
      errors.password = "Invalid password. Must contain one number.";
    }
    return errors;
  };

  const handleOnSubmit = async (values) => {
    try {
      const response = await fetch("http://localhost:8000/users/").then((res) =>
        res.json()
      );
      console.log(response);
    } catch (error) {
      console.log(error.stack);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
      handleOnSubmit(values);
      setIsLogged(true);
      navigate("/Edycja");
    },
    validate: validateSchema,
    validationSchema: loginSchema,
    validateOnBlur: true,
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
