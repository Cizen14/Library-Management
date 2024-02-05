import React from 'react'

import BaseLayout from '../../../Components/BaseLayout'
import BookCarousels from '../../../Components/Carousels/BookCarousels'
import AvailableBooks from '../../../Components/Books/AvailableBooks'


const Home = () => {
  return (
  <BaseLayout>
    <BookCarousels />
    <AvailableBooks />
   
  </BaseLayout>
  )
}

export default Home
