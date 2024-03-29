import { Request, Response } from "express";
import {
  SERVER_ERR_CODE,
  SERVER_ERR_MSG,
  SERVER_PORT,
  SERVER_SUCCESS_CODE,
  SUCCESS_MSG,
} from "./constant";
import { ResponseDBList, TData } from "./types";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT: number = SERVER_PORT;

const mysql = require("mysql2");
const dbConfig = require("./config/db.config");
const pool = mysql.createPool(dbConfig).promise();

app.use(cors());
app.use(express.json());

// get
// 전체 db 조회
app.get("/", async (req: Request, res: Response) => {
  try {
    const connection = await pool.getConnection();
    const sql: string = "SELECT * FROM records";
    const [rows]: ResponseDBList = await connection.query(sql);
    res.status(SERVER_SUCCESS_CODE).send(rows);
    connection.release();
  } catch (err) {
    res.status(SERVER_ERR_CODE).send(SERVER_ERR_MSG);
  }
});

// 요청으로 온 특정 문자열데이터를 category컬럼에 가지고 있는 데이터 조회
app.get("/:category", async (req: Request, res: Response) => {
  try {
    const category: string = req.params.category;
    const sql: string = `SELECT * FROM records WHERE category = '#${category}'`;
    const connection = await pool.getConnection();
    const [rows]: ResponseDBList = await connection.query(sql);
    res.send({
      status: SERVER_SUCCESS_CODE,
      result: rows,
    });
    connection.release();
  } catch (err) {
    console.log(err);
    res.status(SERVER_ERR_CODE).send(SERVER_ERR_MSG);
  }
});

// post
app.post("/save", async (req: Request, res: Response) => {
  try {
    const reqData: TData = req.body;
    const { url, title, description, category } = reqData;
    const sql: string = `INSERT INTO records VALUE('${url}', '${title}', '${description}', '#${category}')`;

    const connection = await pool.getConnection();
    await connection.query(sql);
    res.send({
      status: SERVER_SUCCESS_CODE,
      result: SUCCESS_MSG,
    });
    connection.release();
  } catch (err) {
    console.log(err);
    res.status(SERVER_ERR_CODE).send(SERVER_ERR_MSG);
  }
});

// delete
app.delete("/delete/:title", async (req: Request, res: Response) => {
  try {
    const title: string = req.params.title;
    const sql: string = `DELETE FROM records where title='${title}'`;
    const connection = await pool.getConnection();
    await connection.query(sql);
    res.send({
      status: SERVER_SUCCESS_CODE,
      result: SUCCESS_MSG,
    });
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
