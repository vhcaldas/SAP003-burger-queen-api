import { Router } from 'express'
import ItemController from '../controller/ItemsController';

const itensRouter = Router()
itensRouter.get('/', ItemController.getAllItems);
itensRouter.post('/', ItemController.addItem);
itensRouter.get('/:id', ItemController.getaddItem);
itensRouter.put('/:id', ItemController.updatedItem);
itensRouter.delete('/:id', ItemController.deleteItem);

export default itensRouter