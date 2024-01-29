import React, { useEffect } from 'react'
import {Table} from 'react-bootstrap'
import { getBookList } from '../../redux/books/bookAction'
import { useDispatch, useSelector } from 'react-redux'

const BooksTable = () => {
    const dispatch = useDispatch();

    const {bookList} = useSelector(state=>state.book);
    console.log(bookList)


    //get books from the fire base database
  //save to redux store.
  //get the books from the redux
  //display the book in the table.

  useEffect(()=>{

    console.log("call in user ")
      dispatch(getBookList());
  }, [])


  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
        <th>Author</th>
        <th>Year</th>
      </tr>
    </thead>
    <tbody>
        {  


        bookList.map((book, index) => (
            <tr key ={book.id}>
                <td>{index +1 }</td>
                <td>{book.isbn}</td>
                <td>
                    <img src={book.url} alt='book-image'/></td>
                <td>{book.title} - {book.year}
                <p> {book.summary}</p>
                </td>
            </tr>
        ))
        }









            
    </tbody>
  </Table>
  )
}

export default BooksTable
