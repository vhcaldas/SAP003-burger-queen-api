import { Router } from 'express'
import ProductController from '../controller/ProductController';

const productRouter = Router()
router.get('/', ProductController.getAllProducts)
router.post('/', ProductController.addProduct)
router.get('/:id', ProductController.getaddProduct)
router.put('/:id', ProductController.updatedProduct)
router.delete('/:id', ProductController.deleteProduct)

export default productRouter