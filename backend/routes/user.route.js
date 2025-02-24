import express from 'express';
import { test, updateUser } from '../controllers/user.controller.js';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/product.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();


router.get('/test', test);
router.post('/update/:id', verifyToken, updateUser);

router.get('/products', getProducts);
router.get('/products/:id', verifyToken, getProductById);
router.post('/products', verifyToken, createProduct);
router.put('/products/:id', verifyToken, updateProduct);
router.delete('/products/:id', verifyToken, deleteProduct);


export default router;