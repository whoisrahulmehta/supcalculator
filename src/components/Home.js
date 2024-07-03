import React from 'react'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'
import Mathcal from './Mathcal'
import Convertor from './Convertor'

function Home() {
  return (
    <>
     <Header /> 
     <Routes >
      <Route path='/' element={<Mathcal />} />
      <Route path='convert/*' element = {<Convertor />} />
     </Routes>
    </>
  )
}

export default Home
