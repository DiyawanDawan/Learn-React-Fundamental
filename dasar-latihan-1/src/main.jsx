// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { books } from './book'
import Book from './Book'
import React from 'react'
const BookList = () => {
  return (
    <>
    <h1>Amazon best seller</h1>
    <section className='bookList'>
      {books.map((book, index) => {
        return <Book key={book.id} {...book} number={index} />
      })}
    </section>
    </>
  )
}




ReactDOM.createRoot(document.getElementById('root')).render(
  <BookList />
)
