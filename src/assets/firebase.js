
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc} from "firebase/firestore" 



const firebaseConfig = {
  /*  apiKey: "AIzaSyDQUEH2IEYp0idmUlXJFmPSptyP8weYYNY",  */
  apiKey: process.env.API_KEY,  
  authDomain: "lisa-arteenceramica.firebaseapp.com",
  projectId: "lisa-arteenceramica",
  storageBucket: "lisa-arteenceramica.appspot.com",
  messagingSenderId: "393415337359",
  appId: "1:393415337359:web:34e50071619074245417fa"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore()


//Create prod
const cargarBDD = async ()=> {
  const promise = await fetch ('./json/productos.json')
  const productos = await promise.json()
  productos.forEach(async (prod)=> {

    await addDoc(collection (db, "productos"), {
      nombre: prod.nombre, 
      dimensiones: prod.dimensiones,
      precio: prod.precio,
      stock: prod.stock, 
      idCategoria: prod.idCategoria, 
      img: prod.img
    }
    )


  })


}

//read product
const getProductos= async ()=> {
  const productos =await getDocs(collection(db, "productos"))
  console.log(productos)
  const items = productos.docs.map(prod => {return  {...prod.data(), id:prod.id}})

  return items
}

const getProducto= async (id)=>{
  const prod =await getDoc(doc(db, "productos", id))
  const item ={...prod.data(),id: prod.id}
  return item
}


//Create 1 product 

const createProducto = async(objProducto)=>{
  const estado = await addDoc(collection(db, "productos"),{

       nombre: objProducto.nombre, 
      dimensiones: objProducto.dimensiones,
      precio: objProducto.precio,
      stock: objProducto.stock, 
      idCategoria: objProducto.idCategoria, 
      img: objProducto.img




  })

  return estado
}

//Update

const updateProducto= async(id, info)=>{
  const estado =await updateDoc(doc(db, "productos", id),info)
  return estado

}
//Delete
const deleteProducto = async(id)=> {
  const estado =await deleteDoc(doc(db,"productos",id))

  return estado
}


//crear y leer orden de compra


const createOrdenCompra = async(cliente, preTotal)=>{
  const ordenCompra = await addDoc(collection(db, "ordenCompra"),{

       nombre: cliente.nombre, 
       apellido: cliente.apellido,
      email: cliente.email,
      dni: cliente.dni,
      direccion: cliente.direccion,
      
      precioTotal: preTotal




  })

  return ordenCompra
}

const getOrdenCompra =async (id)=>{
  const item =await getDoc(doc(db, "ordenCompra", id))
  const ordenCompra= {...item.data(), id: item.id}

  return ordenCompra
}





export {cargarBDD, getProductos, getProducto, createProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra}
 
 