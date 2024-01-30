import React, { useEffect, useState } from 'react'
import AdminLayout from '../../../Components/Layout/AdminLayout'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import BooksTable from '../../../Components/Books/BooksTable'
import { useDispatch, useSelector } from 'react-redux'
import { getBookListAction } from '../../../redux/books/bookAction'

const Books = () => {
  const dispatch = useDispatch();
  const {bookList} = useSelector(state=>state.book)
  const [isLoading, setIsLoading] = useState(true);

  console.log(bookList)


  useEffect(()=>{

    console.log("call in user ")
    const getBooks = async () => {
      setIsLoading(true);
      await dispatch(getBookListAction());
      console.log('use effect atfeter');
      setIsLoading(false)
    }
    getBooks();
      
  }, [])

  return (
   
    <AdminLayout title={"Books"}>
      <Link to={'/books/add'} className='d-flex justify-content-end mb-4'>
      <Button>Add a Book</Button>
      </Link>
      {isLoading ? 
       (
        <div>Loading...</div>
       )
       :
       bookList.length ? (<BooksTable/>):(<h1>no book</h1>)
      }
     {/* <BooksTable/> */}
      
      
          
    </AdminLayout>
   
   
  )
}

export default Books
