
import ShopService from '@src/services/ShopService';
import express, { Request } from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  const shops = await ShopService.getAllShops();
  res.send(shops);
});


router.get('/:id', async (req: Request<{id: string}>, res) => {
  const {id} = req.params;
  const shops = await ShopService.getShop(Number(id));
  res.send(shops);
});

router.post('/', async (req: Request<unknown, unknown, {description: string; name: string; userId: string; imageUrl: string;}>, res) => {
  const { description, name, userId, imageUrl } = req.body;
  const createdShop = await ShopService.createShop(name, description, userId, imageUrl);
  res.send(createdShop);
});


export default router;
