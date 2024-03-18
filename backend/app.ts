import { Request, Response } from "express";
import { ResponseDBList } from "./types";

require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 4000;

const mysql = require("mysql2");
const dbConfig = require("./config/db.config");
const pool = mysql.createPool(dbConfig).promise();

app.get("/", async (req: Request, res: Response) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  try {
    const connection = await pool.getConnection();
    const sql = "select * from records";
    const [rows, fields] = await connection.query(sql); // 쿼리 실행

    res.send(rows);
    connection.release();
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});
app.listen(PORT, () => {
  console.log("**----------------------------------**");
  console.log("====      Server is Running!      ====");
  console.log("**----------------------------------**");
});
