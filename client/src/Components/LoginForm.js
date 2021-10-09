import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./Form/FormikControl";
import { generateAuthToken } from "../utils/encrypt";
import axios from "axios";

function LoginForm(props) {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = async (values) => {
    console.log("frontend values", values);
    const { email } = values;

    await axios
      .post("http://localhost:5000/login", values)
      .get(`http://localhost:5000/user/${email}`)
      .then((res) => console.log("this is token", res.data.token));

    values.token = await generateAuthToken(values);
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
