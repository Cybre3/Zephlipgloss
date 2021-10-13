// import React, { useCookies } from "react";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./Form/FormikControl";
import { generateAuthToken } from "../utils/encrypt";
import { useHistory } from "react-router-dom";


function LoginForm(props) {
  // const [cookies, setCookie] = useCookies(['validToken']);
  // const date = new Date();
  // const options = { httpOnly: true, maxAge: date.getDate() * 1000, path: '/' }
  const history = useHistory();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = async (values) => {
    const user = await generateAuthToken(values);
    console.log('frontend token', user)
    // setCookie('validToken', user.token, options);
    history.push("/");
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
