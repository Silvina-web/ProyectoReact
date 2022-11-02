import React from 'react';
import './app.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Contador from './Contador/Contador';
import Home from './Home/Home';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Producto from './Producto/Producto';
import Carrito from './Carrito/Carrito';
import CartWidget from './CartWidget/CartWidget';


const App = () => {
  return (
<>
<BrowserRouter>
    <Navbar/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/producto/:id' element={<Producto/>}/>
       <Route path='/carrito' element={<Carrito/>}/>
       </Routes>
 </BrowserRouter>
<Contador/>
<ItemListContainer greeting={" Hola"}/>
<ItemDetailContainer greeting={"Como estas"}/>

   
</>

);


}

export default App;



 