import { Request, Response } from 'express';
import productsService from '../service/products.service';
 
async function insertNew(req: Request, res: Response): Promise<Response | void> {
  const { body } = req;
  const { status, data } = await productsService.insertNew(body);
  return res.status(status).json(data);
}

export default {
  insertNew,
};