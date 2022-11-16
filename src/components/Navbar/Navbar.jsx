import React from 'react';
import{Link} from 'react-router-dom'
import './navbar.css'
/* import Buscador from '../Buscador/Buscador';
import Dropdown from './Dropdown/Dropdown'; */
import CartWidget from '../CartWidget/CartWidget';
/* import { pikachuMode, togglePikachuMode } from '../../context/darkMode'; */

import { useContext } from 'react';
import { PikachuModeContext } from '../../context/darkMode.js'; 

/* import { PikachuModeContext } from '../../context/darkMode'; */



const Navbar = React.memo( () => {

  const {pikachuMode, togglePikachuMode}= useContext(PikachuModeContext)

    return (
    
             <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <h2>L I S A <br/>Arte en Ceramica</h2>
      
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
               aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon" />
          </button> 
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

               <li className="nav-item">
                        <Link className='nav-link' to='/'>
                                 <button  className='btn btn-secondary-home'>HOME</button>
                        </Link>
               </li>

            <li className="nav-item">
                    <Link className='nav-link' to='/QuienSoy'>
                        <button className='btn btn-secondary-quien-soy'>QUIEN SOY</button>
                    
                     </Link>
              </li>
              <li className="nav-item">
                    <Link className='nav-link' to={'/category/1'}>
                        <button className='btn btn-secondary-categoria1'>COSAS QUE SIRVEN PARA OTRA COSA</button>
                      
                     </Link>
             </li>
             <li className="nav-item">
                    <Link className='nav-link' to={'/category/2'}> 
                    <button className='btn btn-secondary-categoria2'>ADORNOS QUE SIRVEN PARA ADORNAR</button>
                    </Link>
             </li>

             <li className="nav-item">
                    <Link className='nav-link' to={'/category/3'}>
                        <button className='btn btn-secondary-categoria3'>SERIE POKEMON</button>
                      
                     </Link>
             </li>
              <li className="nav-item">
                    <Link className='nav-link' to='/ItemListContainer'>
                        <button className='btn btn-secondary-all'>VER TODO</button>
                      
                     </Link>
             </li>

             <li className="nav-item">
                    <Link className='nav-link' to='/Contacto'>
                        <button className='btn btn-secondary-contacto'>CONTACTO</button>
                      
                     </Link>
             </li>

              <button className={pikachuMode ? 'btn btn-light' : 'btn btn-dark'}   onClick={()=> togglePikachuMode()}> <img src="../img/pikachu.png" alt="" /> </button>
             
 
          
       {/*  <Dropdown/> */}
         {/*  <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>

          </li> */}
 {/*  <li className="nav-item">
            <a className="nav-link" href="#"> <button> <img src="./img/Carrito32.png" alt="Carro de compras" /></button> </a>
          </li> */}
         </ul>
        <CartWidget/>
    {/*   <Buscador busqueda={"Buscar productos"}/> */}
         
      </div>
    </div>
  </nav>
  
        
    );
}
)

export default Navbar;

