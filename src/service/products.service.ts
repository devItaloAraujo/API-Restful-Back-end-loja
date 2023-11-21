import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

async function insertNew(product: Product): Promise<ServiceResponse<Product>> {
  const { dataValues } = await ProductModel.create(product);
  const { id, name, price } = dataValues;
  return { status: 201, data: { id, name, price } };
}

export default {
  insertNew,
};