import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./Form/FormikControl";
import PinkButton from "./SubComponents/Button";
import axios from "axios";
import { useHistory } from "react-router";

const ProductDetails = ({products}) => {
  const history = useHistory();

  const initialValues = {
    // name: "",
    // price: "",
    quantity: 0,
  };

  const validationSchema = Yup.object({
    quantity: Yup.number().moreThan(0),
  });

  const onSubmit = (values) => {
    const { quantity } = values;
    console.log("Quantity from product-details form:", quantity);
    console.log(products[0].img);
    const addToCartProduct = {
      _id: products[0]._id,
      name: products[0].name,
      img: products[0].img,
      price: products[0].price,
      quantity: quantity,
    }

    axios
      .post("http://localhost:5000/shopping-cart", addToCartProduct)
      .then((res) => console.log("Product added to cart", res.data));

      history.push('/shop')
  
  };

  return (
    <div className="container">

      <div className="row">
        <a href="/shop">All Products</a>
      </div>

      { products.map((product) => (
      <div className="row">
        <div className="col-sm">
          <div>
            <img className="product-img" src={product.img} alt={`lipgloss-${product.title}`} />
          </div>
        </div>
        {/* Add carousel here later */}

        <div className="col-sm">
          <h3 className="product-name-details-pg">{product.name}</h3>

          <p className="product-price-details-pg">${product.price.toFixed(2)}</p>

          <p className="product-instock">{product.inventory > 0 ? "In Stock" : "Out of Stock"}</p>

          <p className="description-text">{product.description.summary}</p>
          { product.description.notifications !== "" && <p className="description-text">{product.description.notifications}</p> }
          { product.description.ingredients !== "" &&<p className="description-text">Ingredients: {product.description.ingredients}</p> }

          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {(formik) => {
              return (
                <Form>
                  <FormikControl control="select" label="Quantity" name="quantity" options={[0, 1, 2, 3, 4, 5]}/>
                  <br />
                  <PinkButton action="Add to cart" disabled={!formik.isValid} type="submit"/>
                </Form>
              );
            }}
          </Formik>

          
        </div>
      </div> ))}

    </div>
  );

};

export default ProductDetails;
