import { Request, Response } from 'express';
import ordersService from '../service/orders.service';
 
async function findAll(req: Request, res: Response): Promise<Response | void> {
  const { status, data } = await ordersService.findAll();
  return res.status(status).json(data);
}

export default {
  findAll,
};