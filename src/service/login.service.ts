import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { User } from '../types/User';

const SECRET_KEY = process.env.JWT_SECRET || 'suaSenhaSecreta';

type Data = {
  message?: string;
  token?: string;
};

async function logIn(body: User): Promise<ServiceResponse<Data>> {
  if (!body.username || !body.password) {
    return { status: 400, data: { message: '"username" and "password" are required' } };
  }
  const user = await UserModel.findOne({
    where: { username: body.username },
  });
 
  if (!user || !(await bcrypt.compare(body.password, user.dataValues.password))) {
    return { status: 401, data: { message: 'Username or password invalid' } };
  }

  const { id } = user.dataValues;

  const token = jwt.sign({ id }, SECRET_KEY);

  return { status: 200, data: { token } };
}

export default {
  logIn,
};