import { Router } from 'express'
import OrderController from '../controller/OrdersController';

const ordersRouter = Router()
router.get('/', OrderController.getAllOrders)
router.post('/', OrderController.addOrder)
router.get('/:id', OrderController.getaddOrder)
router.put('/:id', OrderController.updatedOrder)
router.delete('/:id', OrderController.deleteOrder)

export default ordersRouter;