import React from 'react'
import AdminLayout from '../../../Components/Layout/AdminLayout'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Books = () => {
  return (
   
    <AdminLayout title={"Books"}>
      <Link to={'/books/add'} className='d-flex justify-content-end'>
      <Button>Add a Book</Button>
      </Link>
      {/* book list in a table */}
          
    </AdminLayout>
   
  )
}

export default Books
