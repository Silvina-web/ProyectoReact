import React from 'react';
import './app.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Contador from './Contador/Contador';
import Home from './Home/Home';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import CartWidget from './CartWidget/CartWidget';
/* import AllProducts from './AllProducts/AllProducts';
 */

const App = () => {
  return (
<>
<BrowserRouter>
    <Navbar/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/ItemListContainer' element = {<ItemListContainer/>}/>
       <Route path='/product/:id' element={<ItemDetailContainer/>}/>  
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
      {/*  <Route path='/category/:idCategoria' element= {<ItemListContainer/>}/> */}
       </Routes>
 </BrowserRouter>


<Contador/>
{/* <ItemListContainer greeting={" Hola"}/> */}


   
</>

);


}

export default App;



 