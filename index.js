import express from 'express'
import dotenv from 'dotenv'
import {
	getAllBooks,
	getBookId,
	createBook,
	updateBook,
	deleteBook,
	userLogin,
} from './dataController.js'

dotenv.config(); 

const app = express();
app.use(express.json());

app.post('/user/login', userLogin)
app.get('/books', getAllBooks)
app.get('/books/:id', getBookId)
app.post('/books', createBook)
app.put('/books/:id', updateBook)
app.delete('/books/:id', deleteBook)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`)
})