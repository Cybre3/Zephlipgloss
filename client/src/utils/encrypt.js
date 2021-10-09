const { default: axios } = require("axios");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  encrypt: async (password) => {
    const salt = await bcrypt.genSalt();
    password = await bcrypt.hash(password, salt);

    return password;
  },
  generateAuthToken: async (values) => {
    const { email, password } = values;
    console.log('gentok', email)

    const userLoginPassword = password;
    console.log("This is the loginHashPassword", userLoginPassword);

    // Get user from DB
    const userDbMatch = await axios
      .get(`http://localhost:5000/user/${email}`)
      .then((res) => console.log('this is res params', res.data))
      .catch((err) => console.log("No data available", err));

      console.log("The userDb obj", userDbMatch);

    if (!userDbMatch) return console.log("No userDB match");
    console.log("This is userDb password match", userDbMatch.password);

    // compare user loginPage input password to DB user password
    const matchPassword = await bcrypt
      .compare(userLoginPassword, userDbMatch.password)
      .then((validPass) => validPass)
      .catch((err) => err);
    console.log("Password match is:", matchPassword); // true


    const token = jwt.sign({ _id: userDbMatch._id }, process.env.SECRET_KEY);


    return token;
  },
};
