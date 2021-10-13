import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../Form/FormikControl";

function DeleteItem(props) {
  const dropdownOptions = [
    { key: "Select your category", value: "" },
    { key: "Key Chain", value: "keyChain" },
    { key: "Body Oil", value: "bodyOil" },
    { key: "Lip Gloss", value: "lipGloss" },
    { key: "Lip Oil", value: "lipOil" },
    { key: "Lip Scrub", value: "lipScrub" },
  ];

  const initialValues = {
    name: "",
    category: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {(formik) => {
        return (
          <Form>
            <FormikControl control="input" label="Item name" name="name" />
            <FormikControl
              control="select"
              label="Category"
              name="category"
              options={dropdownOptions}
            />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default DeleteItem;
