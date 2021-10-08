import PinkButton from "./SubComponents/Button";
import useFetch from "./useFetch";
import { useParams } from "react-router";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./Form/FormikControl";

const ProductDetails = (props) => {
  const { id } = useParams();
  const { data: product } = useFetch(`http://localhost:5000/product/${id}`);
  // const { description } = product[0];
  // console.log("this", description);
  console.log(id);

 

  // const list = description.map((item, index) => {
  //   return { key: `Option ${index}`, value: item };
  // });

  const dropdownOptions = [{ key: "Select an option", value: "" }];

  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
    birthDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkboxOption: Yup.array().required("Required"),
    birthDate: Yup.date().required("Required").nullable(),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
  };

  return (
    <div className="container">
      <div className="row">
        <a href="/">All Products</a>
      </div>
      <div className="row">
        <div className="col-sm">
          <div>
            <img className="product-img" src={product.img} alt={`lipgloss-${product.title}`} />
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <div className="col-sm">
              <h3 className="product-name-details-pg">{product.name}</h3>
              <Form>
                <FormikControl
                  control="select"
                  label="Select a topic"
                  name="selectOption"
                  options={dropdownOptions}
                />
                <button type="submit">Submit</button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );

  // return (

  // <div className="container">
  //   <div className="row">
  //     <a href="/">All Products</a>
  //   </div>
  //   <div className="row">
  //     <div className="col-sm">
  //       <div>
  //         <img className="product-img" src={product[0].img} alt={`lipgloss-${product.title}`} />
  //       </div>
  //     </div>
  //     {/* Add carousel here later */}

  //     <div className="col-sm">
  //       <h3 className="product-name-details-pg">{product.name}</h3>

  //       <p className="product-price-details-pg">${product.price}</p>

  //       <p className="product-instock">{product.inventory > 0 ? "In Stock" : "Out of Stock"}</p>

  //       <p className="select-type-lable">
  //         COLOR{" "}
  //         <select>
  //           {/* <option value={product.color[0]}>{product.color[0]}</option>
  //           <option value={product.color[1]}>{product.color[1]}</option> */}
  //         </select>
  //       </p>

  //       <p className="select-type-lable">
  //         TUBE{" "}
  //         <select>
  //           {/* <option value={product.tube[0]}>{product.tube[0]}</option>
  //           <option value={product.tube[1]}>{product.tube[1]}</option>
  //           <option value={product.tube[2]}>{product.tube[2]}</option> */}
  //         </select>
  //       </p>

  //       <p className="select-type-lable">
  //         Quantity{" "}
  //         <select>
  //           <option value="1">1</option>
  //           <option value="2">2</option>
  //           <option value="3">3</option>
  //           <option value="4">4</option>
  //           <option value="5">5</option>
  //         </select>
  //       </p>

  //       {/* {description.map((item) => (
  //         <p>{item}</p>
  //       ))} */}

  //       <PinkButton action="Add to Cart" />
  //     </div>
  //   </div>
  // </div>
  //);
};

export default ProductDetails;
