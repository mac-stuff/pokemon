import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().required("required email"),
  password: yup.string().required("required password"),
});

export default loginSchema;
