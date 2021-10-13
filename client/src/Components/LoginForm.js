import React, { useContext, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./Form/FormikControl";
import { generateAuthToken } from "../utils/encrypt";
import authApi from "../utils/authApi";

function LoginForm(props) {
  const { auth, setAuth } = useContext(authApi); // User Context
  console.log("auth: ", auth);
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = async (values) => {
    let token = await generateAuthToken(values);

    if (token !== "") {
      localStorage.setItem('cookie', token);
      setAuth(true);
      window.location = "/"
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {(formik) => {
        return (
          <Form>
            <FormikControl control="input" type="email" label="Email" name="email" />
            <FormikControl control="input" type="password" label="Password" name="password" />
            <button type="submit" disabled={!formik.isValid} onClick={ () => {
              setAuth(true);
            }}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
