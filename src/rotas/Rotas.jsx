import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout.jsx'
import Home from '../pages/Home.jsx'
import NotFound from '../pages/NotFound.jsx'
import PageCarrinho from '../pages/PageCarrinho.jsx'
import Cadastro from '../pages/Cadastro.jsx'


const Rotas = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='carrinho' element={<PageCarrinho/>}/>
        <Route path='cadastro' element={<Cadastro/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default Rotas