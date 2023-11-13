
import ProductService from '@src/services/ProductService';
import express, { Request } from 'express';

const router = express.Router();

// GET route
router.get('/', async (req, res) => {
  const products = await ProductService.getAllProducts();
  res.send(products);
});

// POST route
router.post('/', async (req: Request<unknown, unknown, {shopId: number; description: string; name: string; price: number; imageUrl: string}>, res) => {
  const { shopId, description, name, price, imageUrl } = req.body;
  const createdProduct = await ProductService.createProduct(Number(shopId), description, name, price, imageUrl);
  res.send(createdProduct);
});


export default router;
