
import ProductService from '@src/services/ProductService';
import express, { Request } from 'express';

const router = express.Router();

// GET route
router.get('/', async (req, res) => {
  const products = await ProductService.getAllProducts();
  res.send(products);
});

// POST route
router.post('/', async (req: Request<unknown, unknown, {shopId: number; description: string; name: string; price: number}>, res) => {
  const { shopId, description, name, price } = req.body;
  const createdProduct = await ProductService.createProduct(shopId, description, name, price);
  res.send(createdProduct);
});


export default router;
