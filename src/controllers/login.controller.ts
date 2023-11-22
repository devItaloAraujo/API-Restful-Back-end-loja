import { Request, Response } from 'express';
import loginService from '../service/login.service';
 
async function logIn(req: Request, res: Response): Promise<Response | void> {
  const { body } = req;
  const { status, data } = await loginService.logIn(body);
  return res.status(status).json(data);
}

export default {
  logIn,
};