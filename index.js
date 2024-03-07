import express from 'express'
import dotenv from 'dotenv'

import router from './Routes/books.js'


dotenv.config(); 
const app = express();
app.use(express.json());

//routes
app.use('/book', router) 

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`)
})