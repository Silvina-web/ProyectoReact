import React from 'react';
import { useContext } from 'react';
import { PikachuModeContext } from '../../context/darkMode';

const Contacto = () => {

     const {pikachuMode}= useContext(PikachuModeContext)
    return (
        <div className={pikachuMode ?"pikachuMode Contacto" : "Contacto"}>
            <h1>Contacto</h1>
        </div>
    );
}

export default Contacto;
