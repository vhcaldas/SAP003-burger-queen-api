import { Router } from 'express'
import ItemController from '../../api/controller/ItensController';


const itensRouter = Router()
itensRouter.get('/', ItemController.getAllItems);
itensRouter.post('/', ItemController.addItem);
itensRouter.get('/:id', ItemController.getItem);
itensRouter.put('/:id', ItemController.updatedItem);
itensRouter.delete('/:id', ItemController.deleteItem);

export default itensRouter