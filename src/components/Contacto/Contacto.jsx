import React from 'react';
import { useContext } from 'react';
import { PikachuModeContext } from '../../context/darkMode';
import "./contacto.css";

const Contacto = () => {

     const {pikachuMode}= useContext(PikachuModeContext)
    return (
        <div className={pikachuMode ?"pikachuMode Contacto" : "Contacto"}>
            <div className='Contacto'>
                               <h1 className='contacto-titulo'>Contacto</h1>
               <div className='main-container'>
                        <div className='Direccion'> 
                         <ul>
                              <li>Direccion: Mi casa</li>
                              <li>Telefono: un monton de numeros</li>
                              <li>Mail: Algo con una a  que parece un caracol</li>
                        </ul>

                        </div>
                         <div className='redes'>
                             <img src="../img/instagram64.png" alt="" />
                              <img src="../img/whatsapp64.png" alt="" />

                             </div>


                   
                                
            </div>
      </div>
      </div>

            
            
        
    );
}

export default Contacto;
