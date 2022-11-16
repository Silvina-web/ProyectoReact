import { Link } from "react-router-dom";
import "./item.css"

const Item =({prod})=> {
    return(

        <div className="card border-warning mb-3"  style={{maxWidth: '20rem'}} >
        <img src={prod.img} className ="card-img-top" alt="" />
       {/*  <div className="card-header">Header</div> */}
        <div className="card-body">
         <h4 className="card-title">{prod.nombre}</h4>
         <p className="card-text">Medidas : {prod.dimensiones}</p>
         <p className="card-text">${new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
         <p className="card-text">Stock :{prod.stock}</p>
         <button className="btn btn-outline-warning">
                <Link className='nav-link' to={`/product/${prod.id}`}>Ver</Link></button>
       </div>
     </div>

     
    )
}

export default Item;