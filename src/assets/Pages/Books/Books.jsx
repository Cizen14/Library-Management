import React, { useEffect, useState } from 'react'
import AdminLayout from '../../../Components/Layout/AdminLayout'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import BooksTable from '../../../Components/Books/BooksTable'


const Books = () => {


  return (
   
    <AdminLayout title={"Books"}>
      <Link to={'/books/add'} className='d-flex justify-content-end mb-4'>
      <Button>Add a Book</Button>
      </Link>
     
   <BooksTable/> 
      
      
          
    </AdminLayout>
   
   
  )
}

export default Books
