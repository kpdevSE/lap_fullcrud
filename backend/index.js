const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

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

app.use("/api/v1/blogs", blogRouter);

app.use("/api/v2/departments", departmentsRouter);
