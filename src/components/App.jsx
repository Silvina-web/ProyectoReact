import React from 'react';
import './app.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom';

//context
import { PikachuModeProvider } from '../context/darkMode';
import { CartContextProvider } from '../context/CartContext';

//Componentes
import Navbar from './Navbar/Navbar';
/* import Contador from './ItemCount/ItemCount'; */
import Home from './Home/Home';
import QuienSoy from './QuienSoy/QuienSoy';
import Contacto from './Contacto/Contacto';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
/* import CartWidget from './CartWidget/CartWidget'; */
/* import AllProducts from './AllProducts/AllProducts';
 */

const App = () => {
  return (
<>

<PikachuModeProvider>
{/* <CartContextProvider> */}
<BrowserRouter>

    <Navbar/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/QuienSoy' element={<QuienSoy/>}/> 
       <Route path='/ItemListContainer' element = {<ItemListContainer/>}/>
       <Route path='/product/:id' element={<ItemDetailContainer/>}/>  
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/category/:category' element={<ItemListContainer/>}/>
       <Route path='/Contacto' element={<Contacto/>}/>
      {/*  <Route path='/category/:idCategoria' element= {<ItemListContainer/>}/> */}
       </Routes>
      
 </BrowserRouter>

 {/* </CartContextProvider> */}
 </PikachuModeProvider>
 


{/* <Contador/> */}
{/* <ItemListContainer greeting={" Hola"}/> */}


   
</>

);


}

export default App;



 