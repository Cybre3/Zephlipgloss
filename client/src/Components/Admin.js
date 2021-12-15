import React from "react";

import Jumbotron from "./SubComponents/Jumbotron";

function Admin(props) {
  return (
    <div>
      <Jumbotron message='Welcome Back, what shall we do today?' />
    </div>
  );
}

export default Admin;

// TODO: add side bar with add, update and delete 
// TODO: contact page