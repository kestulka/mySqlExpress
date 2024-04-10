const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const port = 3000;

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const connectDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "zoo",
});

// POST

app.post("/zoo", (req, res) => {
  const sqlQuery = `INSERT INTO zoo_museum(name, type, weight, liveInZoo) VALUES(?, ?, ?, ?)`;
  connectDB.query(
    sqlQuery,
    [req.body.name, req.body.type, req.body.weight, req.body.liveInZoo],
    function (error, result) {
      if (error) throw error;
      res.json({ message: "ok" });
    }
  );
});

// GET

app.get("/zoo", (req, res) => {
  const sqlQuery = `SELECT id, name, type, weight, liveInZoo FROM zoo_museum`;

  connectDB.query(sqlQuery, function (error, result) {
    if (error) throw error;
    res.json({ result });
  });
});

// DELETE

app.delete("/zoo/:id", (req, res) => {
  const sqlQuery = `DELETE FROM zoo_museum WHERE id=?`;

  connectDB.query(
    sqlQuery,
    [
      req.body.name,
      req.body.type,
      req.body.weight,
      req.body.liveInZoo,
      req.params.id,
    ],
    function (error, result) {
      if (error) throw error;
      res.json({ result });
    }
  );
});

// UPDATE

app.put("/zoo/:id", (req, res) => {
  const sqlQuery = `UPDATE zoo_museum SET name=?, type=?, weight=?, liveInZoo=? WHERE id=?`;

  connectDB.query(
    sqlQuery,
    [
      req.body.name,
      req.body.type,
      req.body.weight,
      req.body.live_in_zoo,
      req.params.id,
    ],
    function (error, result) {
      if (error) throw error;
      res.json({ result });
    }
  );
});

app.listen(port, () => console.log(`server listening on port: ${port}`));
