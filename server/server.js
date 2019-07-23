const express = require("express");
const app = express();
const knex = require("knex");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const DATABASE = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "ajbroman",
    password: "",
    database: "downtime"
  }
});

app.get("/foods/:name", (req, res) => {
  const { name } = req.params;
  DATABASE.select("*")
    .from("foods")
    .where("name", "like", `%${name}%`)
    .then(food => {
      // !! CONVERT ME TO ASYNCAWAIT/TRYCATCH temporarily using if else to catch err, !! \\
      console.log(food);
      if (food.length) {
        res.json(food);
      } else {
        res.status(404).send("Not found");
      }
    })
    .catch(err =>
      res.status(404).json("We can't seem to find that vegetable.")
    );
});

app.get("/foodlist", (req, res) => {
  DATABASE.select()
    .from("foods")
    .then(foods => res.json(foods));
});

app.post("/signin", (req, res) => {
  res.json("signin");
});

app.post("/addfood/:name", (req, res) => {
  const { name, calories, size } = req.body;
  DATABASE("foods")
    .insert({ name, calories, size })
    .then(res.status(200).json("Thanks for your submission!"));
});

app.listen(8080, () => console.log("***Server started on port 8080***"));
