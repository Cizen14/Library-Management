import React, { useEffect } from 'react'
import {Button, Table} from 'react-bootstrap'
import { deleteBookAction, getBookListAction } from '../../redux/books/bookAction'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const BooksTable = () => {
    const dispatch = useDispatch();

    //get book list from redux
    const {bookList} = useSelector(state=>state.book);


    

   
 const handleDelete = (id) =>{
  console.log(id)
  dispatch(deleteBookAction(id));

 }
useEffect (()=>{
  dispatch(getBookListAction());
})

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
        bookList.map(({ id, isbn, url, title, author, summary, year }, index) => (
            <tr key ={id}>
                <td>{index +1 }</td>
                <td>{isbn}</td>
                <td>
                    <img src={url} alt='book-image'/></td>
                <td>{title} - {year}
                <p> {summary}</p>
                </td>
                <td>{author}</td>
                <td>
                    <Link to={`/books/edit/${id}`}>
                    < Button variant='warning'>Edit</Button>
                  
                    </Link>
                    <Button variant='danger' onClick={()=> {
                      
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
