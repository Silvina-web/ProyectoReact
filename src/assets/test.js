import { createProducto, getProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra } from "./firebase";




const cliente={

    nombre: " Silvina", 
    apellido: "Perez",
    email: "Silvina@perez.com", 
    dni: 253526,
    direccion: "Calle 5 entre 6 y 9"
}

//createOrdenCompra(cliente, 3800).then(orden=> console.log(orden))

getOrdenCompra("OD9dq2oyXlxpLbSaxV1V").then(orden=> console.log(orden))

/* const producto={
    
        "id":6,
        "idCategoria": 3,
        "nombre": "Pokemon",
        "dimensiones": "10x10",
        "precio": 500,
        "stock": 8, 
         "img": "https://firebasestorage.googleapis.com/v0/b/lisa-arteenceramica.appspot.com/o/Mate.jpg?alt=media&token=b643d1d8-f009-4d6a-9ebf-e93c4ea4dc3f"
    
} */

// OD9dq2oyXlxpLbSaxV1V

//createProducto(producto).then(mensaje=> console.log (mensaje))
/* getProducto("OD9dq2oyXlxpLbSaxV1V").then(prod=>{

    prod.stock -= 10
    updateProducto("OD9dq2oyXlxpLbSaxV1V", prod).then (mensaje=> console.log(mensaje))
})

deleteProducto("OD9dq2oyXlxpLbSaxV1V").then (mensaje=> console.log(mensaje)) */