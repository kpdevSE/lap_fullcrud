const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const FormDataModel = require("./model/FormData");

//importing dot env
require("dotenv").config();

// initilize the database port
const port = process.env.SERVER_PORT | 3000;

// import routes
const blogRouter = require("./route/blogRoute");
const departmentsRouter = require("./route/departmentRoute");

// Initialize app

const app = express();

// cors
app.use(cors());

// Body parser

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

// Database connecting
mongoose
  .connect("mongodb://127.0.0.1:27017/doctors")
  .then(() => {
    app.listen(port, () => {
      console.log(
        `server is running on ${port} and database connected successfully`
      );
    });
  })
  .catch(() => {
    console.log("Database is not connected");
  });

app.get("/home", (req, resp) => {
  resp.json({
    message: "Hello World",
  });
});
app.post("/register", (req, res) => {
  // To post / insert data into database

  const { email, password } = req.body;
  FormDataModel.findOne({ email: email }).then((user) => {
    if (user) {
      res.json("Already registered");
    } else {
      FormDataModel.create(req.body)
        .then((log_reg_form) => res.json(log_reg_form))
        .catch((err) => res.json(err));
    }
  });
});
app.post("/login", (req, res) => {
  // To find record from the database
  const { email, password } = req.body;
  FormDataModel.findOne({ email: email }).then((user) => {
    if (user) {
      // If user found then these 2 cases
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("Wrong password");
      }
    }
    // If user not found then
    else {
      res.json("No records found! ");
    }
  });
});

app.use("/api/v1/blogs", blogRouter);

app.use("/api/v2/departments", departmentsRouter);
