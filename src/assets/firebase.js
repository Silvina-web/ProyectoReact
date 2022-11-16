// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc} from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  
  apiKey: process.env.API_KEY,
  authDomain: "lisa-arteenceramica.firebaseapp.com",
  projectId: "lisa-arteenceramica",
  storageBucket: "lisa-arteenceramica.appspot.com",
  messagingSenderId: "393415337359",
  appId: "1:393415337359:web:34e50071619074245417fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore()

const cargarBDD = async ()=>{
  const promise = await fetch ('./json/productos.json')
  const productos = await promise.json()
  productos.forEach(async (prod)=>{
    await addDoc(collection(db, "productos"), {
      nombre: prod.nombre, 
      dimensiones: prod.dimensiones,
      precio: prod.precio,
      stock: prod.stock, 
      idCategoria: prod.idCategoria, 
      img: prod.img
    })


  })


}

export {cargarBDD}
