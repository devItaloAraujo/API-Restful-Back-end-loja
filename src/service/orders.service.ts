import { ServiceResponse } from '../types/ServiceResponse';
import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';

type OrderResponse = {
  id: number;
  userId: number;
  productsIds?: number[];
};

async function findAll(): Promise<ServiceResponse<OrderResponse[]>> {
  const response = await OrderModel.findAll({
    include: [{ model: ProductModel, as: 'productIds', attributes: ['id'] }],
  });
  const data = response.map(({ dataValues }) => ({
    id: dataValues.id,
    userId: dataValues.userId,
    productIds: dataValues.productIds?.map((product) => product.id),
  }));

  return { status: 200, data };
}

export default {
  findAll,
};