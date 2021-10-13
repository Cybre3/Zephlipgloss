import loginCSS from "../login.css";
// import React, { useCookies } from "react";
import PinkButton from "./SubComponents/Button";

import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./Form/FormikControl";
import { generateAuthToken } from "../utils/encrypt";
import { Link, useHistory } from "react-router-dom";

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
    console.log("frontend token", user);
    // setCookie('validToken', user.token, options);
    history.push("/");
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {(formik) => {
        return (
          <div className="container mr-5">
            <div className="row ml-5">
              <div className="col-md-6 ml-5">
                <div className="card">
                  <Form className="box rounded-3 ml-5 mb-5">
                    <h1>Login</h1>
                    <p className="text-muted">Please sign in</p>
                    <FormikControl control="input" type="email" label="Email" name="email" />
                    <FormikControl 
                      control="input"
                      type="password"
                      label="Password"
                      name="password"
                    />
                    <PinkButton
                      type="submit"
                      action="Submit"
                      disabled={!formik.isValid}
                    ></PinkButton>
                    <div class="col-md-12">
                      <ul class="social-network social-circle">
                        <li>
                          <a href="facebook.com" class="icoFacebook" title="Facebook">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="twitter.com" class="icoTwitter" title="Twitter">
                            <i class="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="google.com" class="icoGoogle" title="Google +">
                            <i class="fab fa-google-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
