import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../SubComponents/TextError";

function Input(props) {
  const { label, name, placeholder, ...rest } = props;

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} placeholder={placeholder} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Input;
