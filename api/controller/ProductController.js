const productsService = require('../services/itemsServices');
const Utils = require('../Utils/Utils');

const util = new Utils();

class ProductsController {
    static async getAllProducts(res) {
        try {
            const allProducts = await productsService.getAllProducts()
            if (allProducts.length > 0) {
                util.setSuccess(200, 'Products retrieved', allProducts)
            } else {
                util.setSuccess(200, 'No Product found')
            }
            return util.send(res)
        } catch (error) {
            util.setError(400, error)
            return util.send(res)
        }
    }

    static async addProduct(req, res) {
        if (!req.body.name || !typeof (req.body.is_alive) === 'boolean') {
            util.setError(400, 'Please provide complete details')
            return util.send(res)
        }
        const newProduct = req.body
        try {
            const createdProduct = await productsService.addProduct(newProduct)
            util.setSuccess(201, 'Product Added!', createdProduct)
            return util.send(res)
        } catch (error) {
            util.setError(400, error.message)
            return util.send(res)
        }
    }

    static async updatedProduct(req, res) {
        const alteredProduct = req.body
        const { id } = req.params
        if (!Number(id)) {
            util.setError(400, 'Please input a valid numeric value')
            return util.send(res)
        }
        try {
            const updateProduct = await productsService.updateProduct(id, alteredProduct)
            if (!updateProduct) {
                util.setError(404, `Cannot find Product with the id: ${id}`)
            } else {
                util.setSuccess(200, 'Product updated', updateProduct)
            }
            return util.send(res)
        } catch (error) {
            util.setError(404, error)
            return util.send(res)
        }
    }

    static async getProduct(req, res) {
        const { id } = req.params

        if (!Number(id)) {
            util.setError(400, 'Please input a valid numeric value')
            return util.send(res)
        }

        try {
            const theProduct = await productsService.getProduct(id)

            if (!theProduct) {
                util.setError(404, `Cannot find Product with the id ${id}`)
            } else {
                util.setSuccess(200, 'Found Product', theProduct)
            }
            return util.send(res)
        } catch (error) {
            util.setError(404, error)
            return util.send(res)
        }
    }

    static async deleteProduct(req, res) {
        const { id } = req.params

        if (!Number(id)) {
            util.setError(400, 'Please provide a numeric value')
            return util.send(res)
        }

        try {
            const ProductToDelete = await productsService.deleteProduct(id)

            if (ProductToDelete) {
                util.setSuccess(200, 'Product deleted')
            } else {
                util.setError(404, `Product with the id ${id} cannot be found`)
            }
            return util.send(res)
        } catch (error) {
            util.setError(400, error)
            return util.send(res)
        }
    }
}

export default ProductsController