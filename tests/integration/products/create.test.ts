import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import { validProduct } from '../../mocks/products.mock';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Produto é criado com sucesso', async function() {
     //arrange

     //act
     const response = await chai.request(app)
       .post('/products')
       .send(validProduct)

    // assert
    expect(response.status).to.be.equal(201);
    // expect(response.body).to.have.key('id');
  });
});
