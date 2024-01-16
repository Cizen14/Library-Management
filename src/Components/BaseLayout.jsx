import React from 'react'
import Header from './Layout/Header'
import Footer from './Layout/Footer'

const BaseLayout = ({children}) => {
  return (
  <>
  <Header />
  <main className="main-content">
    {children}
  </main>
  <Footer />
  </>
  )
}

export default BaseLayout
