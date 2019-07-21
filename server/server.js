const express = require("express");
const app = express();
const knex = require("knex");
const bodyParser = require("body-parser");
const cors = require("cors");

const DATABASE = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "ajbroman",
    password: "",
    database: "downtime"
  }
});

// DATABASE.select("*")
//   .from("foods")
//   .then(data => console.log(data));

app.get("/foods/:name", (req, res) => {
  const { name } = req.params;
  console.log(req.params, name);
  DATABASE.select("*")
    .from("foods")
    .where({
      name
    })
    .then(food => {
      // !! CONVERT ME TO ASYNCAWAIT/TRYCATCH temporarily using if else to catch err, !! \\
      if (food.length) {
        res.json(food);
      } else {
        res.status(400).json("Is this real life?");
      }
    })
    .catch(err =>
      res.status(400).json("We can't seem to find that vegetable.")
    );
});

app.listen(8080, () => console.log("***Server started on port 8080***"));
