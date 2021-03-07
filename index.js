const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const mainAppRoutes = require("./src/routes/mainApp");
const authRoutes = require("./src/routes/auth");

// CORS FIX
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Method",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(bodyParser.json());

app.use("/v1", mainAppRoutes);
app.use("/v1/auth", authRoutes);

// Error Message dan Data secara global
app.use((error, req, res, next) => {
  const status = error.errorStatus || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({
    status: status,
    message: message,
    data: data,
  });
});

mongoose
  .connect(
    "mongodb+srv://bryant:Ehk7CzZQEYI9NDtv@cluster0.uxdim.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(
    () => {
      app.use(4000);
    },
    () => console.log("Connection success")
  )
  .catch((err) => console.log(err));
