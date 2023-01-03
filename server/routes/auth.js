const express = require("express")
  
const {
  // signup,
  signin
} = require("../controllers/auth.js");

const AuthRouter = express.Router()

// AuthRouter.post("/register", signup, function (req, res) {
//
// });

AuthRouter.post("/login", signin, function (req, res) {

});

module.exports = AuthRouter;
