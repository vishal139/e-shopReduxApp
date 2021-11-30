import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import ProductList from './components/ProductList'
import './style.css';
import ProductDetail from './components/ProductDetail';
const App = () => {
    return (
        <>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<ProductList/>} />
                <Route path='/product/:productId' element={<ProductDetail/>} />
                <Route>404 not found</Route>
            </Routes>
        </Router>
        </>
    )
}

export default App
