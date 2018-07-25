/* eslint-disable no-param-reassign */
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const axios = require("axios");

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader(
    "Cache-Control",
    "no-cache, no-store, must-revalidate"
  );
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  next();
});

app.get("/weather", (req, res) => {
  const id = Number(req.query.id);
  axios.get(`https://www.metaweather.com/api/location/${id}/`)
    .then(response => {
      res.setHeader("Cache-Control", "no-cache");
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

app.listen(app.get("port"), () => {
  console.log(
    `Find the server at: http://localhost:${app.get(
      "port"
    )}/`
  ); // eslint-disable-line no-console
});
