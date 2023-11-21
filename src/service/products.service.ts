import { Model } from 'sequelize';
import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

async function insertNew(product: Product): Promise<ServiceResponse<Product>> {
  const { dataValues } = await ProductModel.create(product);
  const { id, name, price } = dataValues;
  return { status: 201, data: { id, name, price } };
}

async function findAll(): Promise<ServiceResponse<Model<Product, ProductInputtableTypes>[]>> {
  const data = await ProductModel.findAll();
  return { status: 200, data };
}

export default {
  insertNew,
  findAll,
};