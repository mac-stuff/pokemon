import * as yup from "yup";

const addSchema = yup.object().shape({
  name: yup.string().required("required"),
  height: yup.string().required("required"),
  baseExperience: yup.string().required("required"),
  weight: yup.string().required("required"),
  ability: yup.string().required("required"),
});

export default addSchema;
