import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const basicSchema = yup.object({
  name: yup.string().required("required name"),

  email: yup
    .string()
    .email("please enter valid email")
    .required("required email"),

  password: yup
    .string()
    .min(8)
    .matches(passwordRules, {
      message:
        "please create a stronger password, password must be at least 8 characters and contain 1 capital letter, 1 number, 1 special character",
    })
    .required("required password"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "password must match")
    .required("required password confirmation"),
});

export default basicSchema;
