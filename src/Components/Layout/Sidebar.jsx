import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const {userInfo} = useSelector(state=> state.auth);
  return (
    <div className='bg-dark text-light'>
        <div className='mt-4 p-2 text-center'> Welcome {userInfo.fName} <br></br> 👋! </div>
        <hr />
        <ul className='list-unstyled ps-2 d-flex flex-column gap-2' >
            <li> <Link to={'/dashboard'} className='nav-link '> Dashboard</Link> </li>
            <li> <Link to={'/books'} className='nav-link '> Book</Link> </li>
            <li> <Link to= {'/history' }className='nav-link '> History</Link> </li>
        </ul>

    </div>
  )
}

export default Sidebar
