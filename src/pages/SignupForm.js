import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Container } from "@mui/material";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Required")
        .min(6, "Password must be at least 6 characters"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values) => {
      // Form gönderme işlemleri
      console.log(values);
    },
  });

  return (
    <Container maxWidth="sm">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="firstName"
          name="firstName"
          label="First Name"
          variant="outlined"
          {...formik.getFieldProps("firstName")}
        />

        <TextField
          fullWidth
          id="lastName"
          name="lastName"
          label="Last Name"
          variant="outlined"
          {...formik.getFieldProps("lastName")}
        />

        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          {...formik.getFieldProps("email")}
        />

        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          {...formik.getFieldProps("password")}
        />

        <TextField
          fullWidth
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          variant="outlined"
          {...formik.getFieldProps("confirmPassword")}
        />

        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default SignupForm;