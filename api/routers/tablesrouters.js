import { Router } from 'express'
import TableController from '../controller/TablesController';

const tablesRouter = Router()
tablesRouter.get('/', TableController.getAllTables)
tablesRouter.post('/', TableController.addTable)
tablesRouter.get('/:id', TableController.getTable)
tablesRouter.put('/:id', TableController.updatedTable)
tablesRouter.delete('/:id', TableController.deleteTable)

export default tablesRouter

