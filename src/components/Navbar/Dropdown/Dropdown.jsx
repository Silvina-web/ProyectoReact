

const Dropdown = () => {
    return (
    
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              PRODUCTOS
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">ADORNOS PARA ADORNAR</a></li>
              <li><a className="dropdown-item" href="#">COSAS QUE SIRVEN PARA OTRA COSA</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">VER TODO</a></li>
            </ul>
          </li>
        
    );
}

export default Dropdown;
