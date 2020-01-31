import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
//import { DatabaseError } from 'sequelize/types';
import productRouter from './routers/productrouters';
import itensRouter from './routers/itensrouters';
import ordersRouter from './routers/ordersrouters';
import tablesRouter from './routers/tablesrouters';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.use('/api/products', productRouter);
app.use('/api/itens', itensRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/tables', tablesRouter);

// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to this API.',
}));

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});

export default app