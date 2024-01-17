import * as Yup from "yup";

export const LoginValidate = Yup.object({
  email: Yup.string()
    .email("Input a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
