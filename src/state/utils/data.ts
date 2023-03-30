import * as yup from "yup";

export const TodoTitleschema = yup.object({
  title: yup.string().required("Title is required"),
});
