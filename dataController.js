import { v4 as uuidv4 } from 'uuid'

class User {
	constructor(email = '', password = '', id = uuidv4()) {
		(this.email = email), (this.password = password), (this.id = id)
	}
}

class Book {
	constructor(
		authors = '',
		title = '',
		description = '',
		favorite = '',
		fileCover = '',
		fileName = '',
		id = uuidv4()
	) {
		  this.authors = authors,
			this.title = title,
			this.description = description,
			this.favorite = favorite,
			this.fileCover = fileCover,
			this.fileName = fileName,
		  this.id = id
	}
}

const books = {
  myBooks: []
}
const user = {
  users: []
}
export const userLogin = (req, res) => {
	const { users } = user
	const { email, password } = req.body
	const newUser = new User(email, password)
	users.push(newUser)
	res.status(201)
	res.json(newUser)
  console.log(users)
	return
}

export const getAllBooks = (req, res) => {
  const { myBooks } = books
  try {
		res.json(myBooks)
  } catch (err) {
		console.log(err)
		res.status(500).json({
			message: 'Не удалось получить книги',
		})
  }	
}

export const getBookId = (req, res) => {
  const { myBooks } = books
	const { id } = req.params
	const item = myBooks.findIndex(el => el.id === id)

	if (item !== -1) {
		res.json(myBooks[item])
	} else {
		res.status(404).json('404 | Книга не найдена')
	}
}

export const createBook = (req, res) => {
  const {myBooks} = books
  const { authors, title, description, favorite, fileCover, fileName } = req.body
  const newBook = new Book(authors, title, description, favorite, fileCover, fileName)
  myBooks.push(newBook)
  res.status(201)
  res.json(newBook)
  return   
}

export const updateBook = (req, res) => {
  const { myBooks } = books
  const { authors, title, description, favorite, fileCover, fileName } = req.body
	const { id } = req.params
	const item = myBooks.findIndex(el => el.id === id)

  if (item !== -1) {
    myBooks[item] = {
      ...myBooks[item],
      authors,
      title,
      description,
      favorite,
      fileCover,
      fileName,
    }
    res.json(myBooks[item])
  } else {
		res.status = 404
	  res.json('Данные обновлены')
  }	
}

export const deleteBook = (req, res) => {
	const { myBooks } = books
	const { id } = req.params
	const item = myBooks.findIndex(el => el.id === id)

	if (item !== -1) {
		myBooks.splice(item, 1)
	} else {
		res.status = 200
		res.json('200 | Данные удалены')
	}
}

