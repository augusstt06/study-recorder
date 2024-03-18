import { Request, Response } from "express";
import { CORS, SERVER_ERR_CODE, SERVER_ERR_MSG, SERVER_PORT } from "./constant";
import { ResponseDBList } from "./types";

require("dotenv").config();
const express = require("express");
const app = express();
const PORT: number = SERVER_PORT;

const mysql = require("mysql2");
const dbConfig = require("./config/db.config");
const pool = mysql.createPool(dbConfig).promise();

// 전체 db 조회
app.get("/", async (req: Request, res: Response) => {
  res.header(CORS, process.env.CLIENT_URL);
  try {
    const connection = await pool.getConnection();
    const sql: string = "SELECT * FROM records";
    const [rows]: ResponseDBList = await connection.query(sql);
    res.send(rows);
    connection.release();
  } catch (err) {
    res.status(SERVER_ERR_CODE).send(SERVER_ERR_MSG);
  }
});

// 요청으로 온 특정 문자열데이터를 category컬럼에 가지고 있는 데이터 조회
app.get("/:category", async (req: Request, res: Response) => {
  res.header(CORS, process.env.CLIENT_URL);
  try {
    const category: string = req.params.category;
    const sql: string = `SELECT * FROM records WHERE category = '#${category}'`;
    const connection = await pool.getConnection();
    const [rows]: ResponseDBList = await connection.query(sql);
    res.send(rows);
    connection.release();
  } catch (err) {
    console.log(err);
    res.status(SERVER_ERR_CODE).send(SERVER_ERR_MSG);
  }
});
app.listen(PORT, () => {
  console.log("--------------------------------------");
  console.log("====      Server is Running!      ====");
  console.log("--------------------------------------");
});
