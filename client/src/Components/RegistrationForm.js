import register from "../register.css";
import React, { useContext } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./Form/FormikControl";
import axios from "axios";
import { encrypt } from "../utils/encrypt";
import PinkButton from "./SubComponents/Button";
import AuthApi from "../utils/authApi";

function RegistrationForm(props) {
  const authApi = useContext(AuthApi);
  console.log("authApi: ", authApi);

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

    if (confirmPassword !== password) return;

    password = await encrypt(password);

    const aUser = {
      email,
      password,
      phone,
    };

    axios
      .post("http://localhost:5000/register", aUser)
      .then((res) => {
        console.log("User added to database", res.data);
        if (res.data.redirect === "/") {
          window.location = "/"
        }
      });
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
                  <h1>Register</h1>
                    <p className="text-muted">Please sign up</p>
                    <FormikControl control="input" type="email" label="Email" name="email" />
                    <FormikControl
                      control="input"
                      type="password"
                      label="Password"
                      name="password"
                    />
                    <FormikControl
                      control="input"
                      type="password"
                      label="Confirm Password"
                      name="confirmPassword"
                    />
                    <FormikControl control="input" type="text" label="Phone number" name="phone" />
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

export default RegistrationForm;
