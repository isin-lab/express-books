import {Router} from 'express'
const router = new Router()

import {
	getAllBooks,
	getBookId,
	createBook,
	updateBook,
	deleteBook,
	userLogin,
} from '../controllers/dataController.js'

router.get('/', getAllBooks)
router.get('/:id', getBookId)
router.post('/', createBook)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook)

router.post('/user/login', userLogin)

export default router




 
