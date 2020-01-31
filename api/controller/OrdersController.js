const orderService = require('../services/orderServices');
const Utils = require('../Utils/Utils');

const util = new Utils();

class OrdersController {
    static async getAllOrders(res) {
        try {
            const allOrders = await orderService.getAllOrders()
            if (allOrders.length > 0) {
                util.setSuccess(200, 'Orders retrieved', allOrders)
            } else {
                util.setSuccess(200, 'No Order found')
            }
            return util.send(res)
        } catch (error) {
            util.setError(400, error)
            return util.send(res)
        }
    }

    static async addOrder(req, res) {
        if (!req.body.name || !typeof (req.body.is_alive) === 'boolean') {
            util.setError(400, 'Please provide complete details')
            return util.send(res)
        }
        const newOrder = req.body
        try {
            const createdOrder = await orderService.addOrder(newOrder)
            util.setSuccess(201, 'Order Added!', createdOrder)
            return util.send(res)
        } catch (error) {
            util.setError(400, error.message)
            return util.send(res)
        }
    }

    static async updatedOrder(req, res) {
        const alteredOrder = req.body
        const { id } = req.params
        if (!Number(id)) {
            util.setError(400, 'Please input a valid numeric value')
            return util.send(res)
        }
        try {
            const updateOrder = await orderService.updateOrder(id, alteredOrder)
            if (!updateOrder) {
                util.setError(404, `Cannot find Order with the id: ${id}`)
            } else {
                util.setSuccess(200, 'Order updated', updateOrder)
            }
            return util.send(res)
        } catch (error) {
            util.setError(404, error)
            return util.send(res)
        }
    }

    static async getOrder(req, res) {
        const { id } = req.params

        if (!Number(id)) {
            util.setError(400, 'Please input a valid numeric value')
            return util.send(res)
        }

        try {
            const theOrder = await orderService.getOrder(id)

            if (!theOrder) {
                util.setError(404, `Cannot find Order with the id ${id}`)
            } else {
                util.setSuccess(200, 'Found Order', theOrder)
            }
            return util.send(res)
        } catch (error) {
            util.setError(404, error)
            return util.send(res)
        }
    }

    static async deleteOrder(req, res) {
        const { id } = req.params

        if (!Number(id)) {
            util.setError(400, 'Please provide a numeric value')
            return util.send(res)
        }

        try {
            const OrderToDelete = await orderService.deleteOrder(id)

            if (OrderToDelete) {
                util.setSuccess(200, 'Order deleted')
            } else {
                util.setError(404, `Order with the id ${id} cannot be found`)
            }
            return util.send(res)
        } catch (error) {
            util.setError(400, error)
            return util.send(res)
        }
    }
}

export default OrdersController