import{Link} from 'react-router-dom'
import './navbar.css'
import Buscador from '../Buscador/Buscador';
import Dropdown from './Dropdown/Dropdown';
import CartWidget from '../CartWidget/CartWidget';



const Navbar = () => {
    return (
    
             <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <h2>L I S A <br/>Arte en Ceramica</h2>
      
     {/*  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
      aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button> */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          
          <Link className='nav-link' to='/'>
               <button className='btn btn-secondary'>HOME</button>
          </Link>
          
         </li>
         <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">QUIEN SOY</a>
         </li>
         <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Adornos</a>
         </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
        <Dropdown/>
         {/*  <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>

          </li> */}

          
         {/*  <li className="nav-item">
            <a className="nav-link" href="#"> <button> <img src="./img/Carrito32.png" alt="Carro de compras" /></button> </a>
          </li> */}
         </ul>
        <CartWidget/>
      <Buscador busqueda={"Buscar productos"}/>
         
      </div>
    </div>
  </nav>
  
        
    );
}

export default Navbar;
