import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';
import { listOfProducts } from '../../mocks/products.mock';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  
  it('Produtos são listados com sucesso', async function() {
    //arrange
    const listSimulated = listOfProducts.map( (item) => ProductModel.build(item) );
      
    sinon.stub(ProductModel, 'findAll')
      .resolves(listSimulated);

    //act
    const response = await chai.request(app)
      .get('/products');

   // assert

   expect(response.status).to.be.equal(200);
   expect(response.body).to.have.deep.members(listOfProducts);
   
 });
});
