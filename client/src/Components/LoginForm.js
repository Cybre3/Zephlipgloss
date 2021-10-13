import React, { useCookies } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./Form/FormikControl";
import { generateAuthToken } from "../utils/encrypt";

function LoginForm(props) {
  // const [cookies, setCookie] = useCookies(['access_token'])

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
    console.log("Login form token", token);
    if (token != "") {
      localStorage.setItem('cookie', token);
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
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
