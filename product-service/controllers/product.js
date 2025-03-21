import Product from "../models/product.js";
import { createProductInDB } from "../services/productServices.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await ProductModel.getProductById(id);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


export const createProduct = async (req, res) => {
    try {
        console.log("req.bod:",req.body)
        const productData  = req.body;
         console.log("productData:",productData)
      
        if (!productData) {
            return res.status(400).json({ error: "Product data is required" });
        }

        const { name, description, price, quantity } = productData;

      
        if (!name || !price) {
            return res.status(400).json({ error: "Name and price are required" });
        }

        
        const newProduct = await createProductInDB({ name, description, price, quantity });

        res.status(201).json(newProduct);
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ error: error.message });
    }
};


export const updateStock = async (req, res) => {
    try {
        const { id } = req.params;
        const { quantity } = req.body;

        if (quantity === undefined) {
            return res.status(400).json({ error: 'Quantity is required' });
        }

        const updatedProduct = await ProductModel.updateStockInDB(id, quantity);

        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error('Error updating stock:', error);
        res.status(500).json({ error: error.message });
    }
};
