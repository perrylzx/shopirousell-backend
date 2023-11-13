
import UserService from '@src/services/UserService';
import express, { Request } from 'express';

const router = express.Router();

router.get('/:id', async (req: Request<{id: string}>, res) => {
  const shops = await UserService.getUser(req.params.id);
  res.send(shops);
});

router.post('/:id', async (req: Request<{id: string}>, res) => {
  const shops = await UserService.createUser(req.params.id);
  res.send(shops);
});



export default router;
