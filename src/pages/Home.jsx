import React from 'react'
import { Navbar, Footer, Foodcard, Caraousel } from '../components'

function Home() {
  return (
    <>
    <Navbar/>
    <Caraousel/>
    <div className='m-3'>
      <Foodcard/>
    </div>
    <Footer/>
    </>
    
  )
}

export default Home