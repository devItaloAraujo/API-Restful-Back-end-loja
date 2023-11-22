import express from 'express';
import productsController from './controllers/products.controller';
import ordersController from './controllers/orders.controller';
import loginController from './controllers/login.controller';

const app = express();

app.use(express.json());
app.post('/products', productsController.insertNew);
app.get('/products', productsController.findAll);
app.get('/orders', ordersController.findAll);
app.post('/login', loginController.logIn);

export default app;
