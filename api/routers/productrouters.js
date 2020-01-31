import { Router } from 'express'
import ProductController from '../controller/ProductController';

const productRouter = Router()
productRouter.get('/', ProductController.getAllProducts)
productRouter.post('/', ProductController.addProduct)
productRouter.get('/:id', ProductController.getaddProduct)
productRouter.put('/:id', ProductController.updatedProduct)
productRouter.delete('/:id', ProductController.deleteProduct)

export default productRouter