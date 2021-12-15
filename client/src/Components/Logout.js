import axios from "axios";
import React, { useState } from "react";
import { Redirect } from "react-router";
require('dotenv').config();

function Logout(props) {
  // let cart = useFetch('http://localhost:5000/shopping-cart');
  // let [collection, setCollection] = useState(cart);
  const [status, setStatus] = useState(null);

  axios
    .delete(`${process.env.REACT_APP_API_URL}/logout`)
    .then((res) => {
      setStatus("Delete successful");
      if (res.status === 303) {
        console.log(res)
        console.log(status);
      }
    })
    .catch((error) => {
      console.log("This is error message", error.message);
      console.error("There was an error!", error);
    });
    localStorage.clear()
    return <Redirect to='/' />
}

export default Logout;
