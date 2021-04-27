const express = require("express");
const path = require("path");
const { Pool } = require("pg");

const app = express();

//server config
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));


//start the server
app.listen(3000, () => { {
    console.log("Server started (http://localhost:3000/) !");
  }});

// GET /
app.get("/", (request, response) => {
    // res.send("Hello world...");
    response.render("index");
  });


//about
app.get("/about", (req, res) => {
    res.render("about");
  });

  //data
  app.get("/data", (req, res) => {
    const test = {
      title: "Test",
      items: ["one", "two", "three"]
    };
    res.render("data", { model: test });
  });


