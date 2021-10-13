import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../Form/FormikControl";

function EditItem(props) {
  // do a use fetch for get item by id, put id in url
  const dropdownOptions = [
    { key: "Select your category", value: "" },
    { key: "Key Chain", value: "keyChain" },
    { key: "Body Oil", value: "bodyOil" },
    { key: "Lip Gloss", value: "lipGloss" },
    { key: "Lip Oil", value: "lipOil" },
    { key: "Lip Scrub", value: "lipScrub" },
  ];

  const checkboxOptions = [{ key: "Sale", value: "yes" }];

  const initialValues = {
    name: "",
    price: "",
    image: "",
    category: "",
    sale: [],
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    price: Yup.number().required("Required"),
    image: Yup.string(),
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
            <FormikControl control="input" label="Item price" name="price" />
            <FormikControl
              control="select"
              label="Category"
              name="category"
              options={dropdownOptions}
            />
            <FormikControl control="checkbox" name="sale" options={checkboxOptions} />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default EditItem;
