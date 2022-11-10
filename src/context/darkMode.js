import { useState, createContext } from "react";

const PikachuModeContext = createContext()

const PikachuModeProvider= (props) => {


    const [pikachuMode, setPikachuMode] = useState(false);

    const togglePikachuMode=()=>{
        setPikachuMode(!pikachuMode)//niego el valor de pikachuMode
    }

    return(
        <PikachuModeContext.Provider value={{pikachuMode, togglePikachuMode}}>
            {props.children}
        </PikachuModeContext.Provider>
    )
}

export {PikachuModeContext, PikachuModeProvider}