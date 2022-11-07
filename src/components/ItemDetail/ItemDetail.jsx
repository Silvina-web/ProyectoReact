import React from 'react';

const ItemDetail = ({producto}) => {
    return (
        <div>
             <div className="card border-warning mb-3"  style={{maxWidth: '20rem'}} >
                       <img src={`../img/${producto.img}`} className ="card-img-top" alt="" />
                       <div className="card-header">Header</div>
                       <div className="card-body">
                        <h4 className="card-title">{producto.nombre}</h4>
                        <p className="card-text">Medidas : {producto.dimensiones}</p>
                        <p className="card-text">${producto.precio}</p>
                        <p className="card-text">Stock :{producto.stock}</p>
                        <button className="btn btn-outline-warning">Comprame</button>
                      </div>
                    </div>
        </div>
    );
}

export default ItemDetail;
