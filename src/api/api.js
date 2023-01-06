import express from "express";
import cors from 'cors';
import productRouter from "../routes/product.router.js";
//import productRouter  from "../routes/product.router.js";

const app = express();

app.use(cors());
app.use(express.json());
//parsear x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

app.use("api/pollos",productRouter);

export default app;
//morgan o brainstom

