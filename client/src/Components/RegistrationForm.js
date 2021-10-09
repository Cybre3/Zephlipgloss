import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./Form/FormikControl";
import axios from "axios";
import { encrypt } from "../utils/encrypt";

function RegistrationForm(props) {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Required"),
    phone: Yup.string().required("Required"),
  });

  const onSubmit = async (values) => {
    let { password } = values;
    const { email, confirmPassword, phone } = values;
    console.log(values);

    if (!confirmPassword === password) return;

    password = await encrypt(password);

    const aUser = {
      email,
      password,
      phone,
    };

    axios
      .post("http://localhost:5000/register", aUser)
      .then((res) => console.log("User sent to backend", res.data));
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {(formik) => {
        return (
          <Form>
            <FormikControl control="input" type="email" label="Email" name="email" />
            <FormikControl control="input" type="password" label="Password" name="password" />
            <FormikControl
              control="input"
              type="password"
              label="Confirm Password"
              name="confirmPassword"
            />
            <FormikControl control="input" type="text" label="Phone number" name="phone" />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default RegistrationForm;
