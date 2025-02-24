import Product from "../models/product.model.js";
import { errorHandler } from "../utils/error.js";

export const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        next(errorHandler(500, "Failed to fetch products"));
    }
}

export const getProductById = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        next(errorHandler(500, "Failed to fetch product"));
    }
}

export const createProduct = async (req, res, next) => {
    const { name, price, imageURL } = req.body;
    if (!name || !price || !imageURL) {
        return next(errorHandler(400, "All fields are required"));
      }
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        next(errorHandler(500, "Failed to create product"));
    }
}

export const updateProduct = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(product);
    } catch (error) {
        next(errorHandler(500, "Failed to update product"));
    }
}

export const deleteProduct = async (req, res, next) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        next(errorHandler(500, "Failed to delete product"));
    }
}