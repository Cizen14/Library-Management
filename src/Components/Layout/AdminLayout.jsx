import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

const AdminLayout = ( {title, children}) => {
  return (
    <div className='d-flex'>
     <Sidebar />
        <div className='flex-grow-1'>
      <Header/>
      <main className='main-content'> 
      <h2>{title} </h2>
      <hr />
      {children}</main>
      <Footer />
      </div>

    </div>
  )
}

export default AdminLayout
