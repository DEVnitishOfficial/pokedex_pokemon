import { useState } from 'react'
import './App.css'
import Pokedex from './components/pokedex/pokedex'
import CustomRoutes from './Routes/CustomRoutes'
import { Link } from 'react-router-dom'

function App() {

  return (

   <>
      <h1 className=" text-4xl m-4 font-bold tracking-widest underline underline-offset-2 justify-center text-center">
        <Link className=' text-blue-600 visited:text-purple-600 ' to={'/'}> Pokedex </Link>
       </h1>
    <CustomRoutes />
    
   </>
  )
}

export default App
