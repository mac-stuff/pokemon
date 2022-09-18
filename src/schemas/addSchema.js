import * as yup from "yup";

const addSchema = yup.object().shape({
  name: yup.string().required("required"),
  height: yup.number().required("required"),
  baseExperience: yup.number().required("required"),
  weight: yup.number().required("required"),
  ability: yup.number().required("required"),
});

export default addSchema;
