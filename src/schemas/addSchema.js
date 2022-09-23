import * as yup from "yup";

const addSchema = yup.object().shape({
  name: yup.string().required("required"),
  height: yup.number().required("required"),
  base_experience: yup.number().required("required"),
  weight: yup.number().required("required"),
  abilities: yup.string().required("required"),
});

export default addSchema;
