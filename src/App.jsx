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
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import History from './assets/Pages/History/History'
import Home from './assets/Pages/home/Home'
import BookLanding from './assets/Pages/Books/BookLanding'



function App() {
 

  return (
    <>
     <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/books/:id' element={ <BookLanding />}></Route>
      <Route path='/login' element={ <Login />} />
      <Route path='/admin-signup' element={ <AdminSignup />} />
      <Route path='/reset-password' element={ <ResetPassword />} />

      <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>} />
      
      <Route path='/history' element={<PrivateRoute><History/></PrivateRoute>} />
      
      <Route path='/books/add' element={<PrivateRoute><AddBook/></PrivateRoute> }/>
      <Route path='/books/edit/:id' element={<PrivateRoute><EditBook/></PrivateRoute>} />
      <Route path='/books' element={<PrivateRoute><Books/></PrivateRoute>} />


    
     </Routes>
    </>
  )
}

export default App
