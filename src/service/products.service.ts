import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

async function insertNew(product: Product): Promise<ServiceResponse<Product>> {
  const newProduct = await ProductModel.create(product);
  return { status: 201, data: newProduct.dataValues };
}

export default {
  insertNew,
};