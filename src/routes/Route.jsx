import React from 'react'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import CreateClient from '../Screens/CreateClient'
import CreateProduct from '../Screens/CreateProduct'
import Home from '../Screens/Home'

export default function MyRoute() {
    return (
        <BrowserRouter>
         <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}
