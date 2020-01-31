import { Router } from 'express'
import ItemController from '../controller/ItemsController';

const itensRouter = Router()
router.get('/', ItemController.getAllItems);
router.post('/', ItemController.addItem);
router.get('/:id', ItemController.getaddItem);
router.put('/:id', ItemController.updatedItem);
router.delete('/:id', ItemController.deleteItem);

export default itensRouter