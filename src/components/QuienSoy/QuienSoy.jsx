import React from 'react';
import './quienSoy.css'

import { useContext } from 'react';
import { PikachuModeContext } from '../../context/darkMode.js';  

const QuienSoy = () => {

    const {pikachuMode, } = useContext(PikachuModeContext)
    return (
        <div className={pikachuMode ? 'Quien-soy pikachuMode' :'Quien-soy'}> 
              
         {/*   <div className='Quien-soy'>  */}
      <img src="../img/QuienSoy.jpg" alt="" />
               
             <div class="card">
                 <div class="card-body">
                 <p>Me llamo Lisa y tengo 8 años, hace 2 años que voy a Cerámica, me gusta mucho, la paso super bien, mi profe Gaby es muy bueno y divertido y mis compañeros de ceramica tambien.
                También me gusta mucho pintar.
                </p>
                 </div>
            </div>


        </div>
    );
}

export default QuienSoy;
