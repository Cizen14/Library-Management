import React, { useEffect } from 'react'
import {Button, Table} from 'react-bootstrap'
import { deleteBookAction, getBookListAction } from '../../redux/books/bookAction'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const BooksTable = () => {
    const dispatch = useDispatch();

    //get book list from redux
    const {bookList} = useSelector(state=>state.book);
    console.log(bookList)

    

   
 const handleDelete = (id) =>{
  console.log(id)
  dispatch(deleteBookAction(id));

 }

  


  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>ISBN</th>
        <th>Image</th>
        <th>Info</th>
        <th>Author</th>
        <th>Actions</th>
        
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
                <td>{book.author}</td>
                <td>
                    <Link to={`/books/edit/${book.id}`}>
                    < Button variant='warning'>Edit</Button>
                  
                    </Link>
                    <Button variant='danger' onClick={()=> {
                      console.log(book.id);
                      handleDelete(book.id)}}>Delete</Button>
                </td>
            </tr>
        ))
        }









            
    </tbody>
  </Table>
  )
}

export default BooksTable
