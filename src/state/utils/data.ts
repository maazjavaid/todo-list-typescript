import * as yup from "yup";

export const TodoTitleschema = yup.object({
  title: yup.string().required("Title is required"),
});

export const UserLoginSchema = yup.object({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const UserRegisterSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().required(),
});
