import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../Form/FormikControl";

function Subscribe(props) {
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required("Required"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
    {(formik) => {
      return (
        <Form className=''>
          <FormikControl className='form-control' label="Subscribe" control="input" placeholder="Enter your email here" name="email" />
          <br />
          <button type="submit" disabled={!formik.isValid}>
            Submit
          </button>
        </Form>
      );
    }}
  </Formik>
  );
}

/* 
<div class="input-group mb-3">
  <input type="file" class="form-control" id="inputGroupFile02">
  <label class="input-group-text" for="inputGroupFile02">Upload</label>
</div>
*/

export default Subscribe;