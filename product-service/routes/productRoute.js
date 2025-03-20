import express from  'express';

import * as ProductController from '../controllers/product.js'

const router=express.Router();

router.get('/products',ProductController.getAllProducts);
router.get('/:id',ProductController.getProductById);
router.post('/create-product',ProductController.createProduct);
router.put('/update-stock',ProductController.updateStock);


export default router;
