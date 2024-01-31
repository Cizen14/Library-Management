import React from 'react'

import BaseLayout from '../../../Components/BaseLayout'
import BookCarousels from '../../../Components/Carousels/BookCarousels'
import AvailableBooks from '../../../Components/Books/AvailableBooks'
import BookCard from '../../../Components/Books/BookCard'

const Home = () => {
  return (
  <BaseLayout>
    <BookCarousels />
    <AvailableBooks />
    <BookCard />
  </BaseLayout>
  )
}

export default Home
