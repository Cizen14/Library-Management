import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './assets/Pages/auth/Login'
import AdminSignup from './assets/Pages/auth/AdminSignup'
import ResetPassword from './assets/Pages/auth/ResetPassword'
import Dashboard from './assets/Pages/Dashboard/Dashboard'
import AddBook from './assets/Pages/Books/AddBook'
import EditBook from './assets/Pages/Books/EditBook'
import Books from './assets/Pages/Books/Books'


function App() {
 

  return (
    <>
     <Routes>
      <Route path='/' element={ <Login />} />
      <Route path='/login' element={ <Login />} />
      <Route path='/admin-signup' element={ <AdminSignup />} />
      <Route path='/reset-password' element={ <ResetPassword />} />

      <Route path='/dashboard' element={<Dashboard/>} />
      
      <Route path='/history' element={<History/>} />
      
      <Route path='/books/add' element={<AddBook/>} />
      <Route path='/books/edit' element={<EditBook/>} />
      <Route path='/books' element={<Books/>} />


    
     </Routes>
    </>
  )
}

export default App
