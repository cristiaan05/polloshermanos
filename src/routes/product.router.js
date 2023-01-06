import express from "express";
import { createProduct } from "../controllers/product.controller.js";



const productRouter = express.Router();

productRouter.post("/product", createProduct);

export default productRouter;