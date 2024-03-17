import { Request, Response } from "express";

require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 4000;

const mysql = require("mysql2");
const dbConfig = require("./config/db.config");
const connection = mysql.createConnection(dbConfig);

app.get("/", (req: Request, res: Response) => {
  connection.connect();

  var sql = "select * from records";
  connection.query(sql, function (err: any, rows: any, fields: any) {
    if (err) {
      console.error("error connecting: " + err.stack);
    }
    res.send(rows);
  });
  connection.end();
});
app.listen(PORT, () => {
  console.log("**----------------------------------**");
  console.log("====      Server is Running!      ====");
  console.log("**----------------------------------**");
});
