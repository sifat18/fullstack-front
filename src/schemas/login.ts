import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().min(6).max(32).required(),
});
export const registerSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().min(6).max(32).required(),
  phoneNumber: yup.number().required("Phone Number is required"),
  name: yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
  }),
});
