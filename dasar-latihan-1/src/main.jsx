// import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
// function Greeting() {

//   // return(
//   //   <h2>Halo World</h2>
//   // )

//   // return (
//   //   <>
//   //   <div className='some'>
//   //     <h1>Halo peple</h1>
//   //     <ul>
//   //       <li><a href="@">Halo Paple</a></li>
//   //     </ul>
//   //   </div>
//   //   <img src="" alt="" />
//   //   <input type="color" name="color" id="color" />
//   //   </>
//   // )

//   return (
//     <div>
//       {/* <h1>Halo Jhon</h1>
//       <p>This my mesage</p> */}

//       <Person />
//       <Message/>
//     </div>
//   )
// }

// const Person = () => <h1>Halo Jhon</h1>
// const Message = () =>  <p>This my mesage</p>


// const author = 'by Sarah J. Maas (Author)'
// const title = 'A Court of Thorns and Roses (A Court of Thorns and Roses, 1)'
// const publis = 'Paperback – June 2, 2020'
// const img = './books/book1.png'



// const fristBook = {
//   title: 'A Court of Thorns and Roses (A Court of Thorns and Roses, 1)',
//   author: 'by Sarah J. Maas (Author)',
//   publis: 'Paperback – June 2, 2020',
//   img: './books/book1.png'
// }

// const seaconBook = {
//   author: 'by Rebecca Yarros (Author)',
//   title: 'Fourth Wing (International Edition)',
//   publis: 'Paperback – March 26, 2024',
//   img: './books/image5.jpg'
// }




// const Button = () =>{
//   return (
//     <div>
//       <button>Buy Now</button>
//       <button>Add to Chart</button>
//     </div>
//   )
// }


const books = [
  {
    title: 'A Court of Thorns and Roses (A Court of Thorns and Roses, 1)',
    author: 'by Sarah J. Maas (Author)',
    publis: 'Paperback – June 2, 2020',
    img: './books/book1.png',
    id: 1,
  },
  {
    author: 'by Rebecca Yarros (Author)',
    title: 'Fourth Wing (International Edition)',
    publis: 'Paperback – March 26, 2024',
    img: './books/image5.jpg',
    id: 2,
  }
]

const BookList = () => {
  // const author = 'by Sarah J. Maas (Author)'
  // const title = 'A Court of Thorns and Roses (A Court of Thorns and Roses, 1)'
  // const publis = 'Paperback – June 2, 2020'
  // const img = './books/book1.png'

  // const someValue = 'shakeAndBake'
  // const displayValue = () => {
  //   console.log(someValue);
  // }

  const getBook = (id) =>{
    const book = books.find((book) => book.id === id) 
    console.log(book);
  }
  // getBook(2)

  return (
    <section className='bookList'>
      {/* <Book title={fristBook.title} img={fristBook.img} author={fristBook.author} publis={fristBook.publis} /> 
        {/* <Button />
      </Book> */}
      {/* <Book title={seaconBook.title} img={seaconBook.img} author={seaconBook.author} publis={seaconBook.publis}/> */}

      {/* <EvenExample /> */}


      {books.map((book) => {
        // const {author, title, publis, img, id} = book
        // console.log(book);
        // return <Book key={id} title={title} author={author} publis={publis} img={img}/>


        // return <Book book={book} key={book.id}/>

        return <Book key={book.id} {...book} getBook={getBook}/>
      })}

      {/* <SomeComponents someValue={someValue}/> */}
    </section>
  )
}


// const EvenExample = () => {
//   const headleFormInput = (e) => {
//     // console.log('Form Input');
//     // e.target.value
//     // console.log(e.target);
//     // console.log(e.target.name);
//     console.log(e.target.value);
//   }
//   const headleButtonInput = (e) => {
//     alert('Buuton Input');

//     e.preventDefault()
//   }
//   const headleFormSubmitInput = (e) => {
//     // alert('Buuton Input');
//     e.preventDefault()
//     console.log(e.target.value);
//     console.log('submit');
//   }

//   return (
//     <section>
//       <form action="" onSubmit={headleFormSubmitInput}>

//         <h2>Inpur Form</h2>
//         {/* <input type="text" name="product" id="say" style={{ margin: '1rem 0' }} onChange={headleFormInput} /> */}

//         <input type="text" name="product" id="say" style={{ margin: '1rem 0' }} onChange={(e) => console.log(e.target.value)} />
//         <button type='submit'>Submit</button>
//         {/* <button onClick={headleButtonInput} type='button'>Button</button> */}
//         <button onClick={() => console.log('Clik Me')} type='button'>Click Me</button>
//       </form>
//     </section>
//   )
// }



const Book = ({ img, title, author, publis, getBook, id}) => {
  // const {img, title, author, publis} = props.book
  // console.log(props);

const getSigleBook = () => {
  getBook(id)
}
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title} </h2>
      {/* <button onClick={displayValue}>Disply Title</button> */}
      <button onClick={getBook(id)}> get id Book</button>
      {/* <button onClick={getSigleBook}> get id Book</button> */}
      <h4>{author}</h4>
      <span>{publis}</span>
      {/* {children} */}
    </article>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Greeting />
  <BookList />
)
