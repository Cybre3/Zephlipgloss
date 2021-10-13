const { default: axios } = require("axios");
const bcrypt = require("bcryptjs");
require("dotenv").config({ path: "/client/.env" });

module.exports = {
  encrypt: async (password) => {
    const salt = await bcrypt.genSalt();
    password = await bcrypt.hash(password, salt);

    return password;
  },
  generateAuthToken: async (values) => {
    const { email, password } = values;
    const userLoginPassword = password;

    // Get user from DB
    const userDbMatch = await axios
      .get(`http://localhost:5000/user/${email}`)
      .then((res) => res.data)
      .catch((err) => console.log("No data available", err));

    if (!userDbMatch) return console.log("No userDB match");

    // compare user loginPage input password to DB user password
    const matchPassword = await bcrypt
      .compare(userLoginPassword, userDbMatch.password)
      .then((validPass) => validPass)
      .catch((err) => err);
    console.log("Password match is:", matchPassword); // true

    values.dbUser = await userDbMatch;
    values.passMatch = await matchPassword;

    let token = "";
    await axios
      .post("http://localhost:5000/login", values)
      .then((res) => {
        console.log("This is res.data", res.data);
         token = res.data.token;
      })
      .catch((err) => console.log(err));
      console.log("I am token ", token);
    return token;
  },
};
