
import './navbar.css'
import Buscador from '../Buscador/Buscador';
import Dropdown from './Dropdown/Dropdown';



const Navbar = () => {
    return (
    
             <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">L I S A <br/>Arte en Ceramica</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Potes</a>
         </li>
         <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Platos</a>
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
          <li className="nav-item">
            <a className="nav-link" href="#"> <button> <img src="./img/Carrito32.png" alt="Carro de compras" /></button> </a>
          </li>
        </ul>
      <Buscador busqueda={"Buscar productos"}/>
      
      </div>
    </div>
  </nav>
  
        
    );
}

export default Navbar;
