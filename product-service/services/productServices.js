import Product from '../models/product.js'; // Import the Sequelize Product model

// Get all products
export const getAllProducts = async () => {
    return await Product.findAll();
};

// Get a single product by ID
export const getProductById = async (id) => {
    return await Product.findByPk(id); // Sequelize's built-in method to find by primary key
};

// Create a new product
export const createProductInDB = async ({ name, description, price, quantity }) => {
    return await Product.create({ name, description, price, quantity });
};

// Update stock quantity of a product
export const updateStockInDB = async (id, quantity) => {
    const product = await Product.findByPk(id);
    if (!product) return null; // Return null if product doesn't exist

    product.quantity = quantity;
    await product.save(); // Save the updated product
    return product;
};
