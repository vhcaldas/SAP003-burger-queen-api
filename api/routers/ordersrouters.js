import { Router } from 'express'
import OrderController from '../controller/OrdersController';

const ordersRouter = Router()
ordersRouter.get('/', OrderController.getAllOrders)
ordersRouter.post('/', OrderController.addOrder)
ordersRouter.get('/:id', OrderController.getaddOrder)
ordersRouter.put('/:id', OrderController.updatedOrder)
ordersRouter.delete('/:id', OrderController.deleteOrder)

export default ordersRouter;