import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { listOfOrder, listOfOrderFromDb } from '../../mocks/orders.mock';
import OrderModel from '../../../src/database/models/order.model';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });
  
  it('Pedidos são listados com sucesso', async function() {
    //arrange
    const listSimulated = listOfOrderFromDb.map( (item) => OrderModel.build(item, {
    include: [{ model: ProductModel, as: 'productIds', attributes: ['id'] }],
    }) );
      
    sinon.stub(OrderModel, 'findAll')
      .resolves(listSimulated);

    //act
    const response = await chai.request(app)
      .get('/orders');

   // assert
   expect(response.status).to.be.equal(200);
   expect(response.body).to.be.eql(listOfOrder);
  })
} 
);