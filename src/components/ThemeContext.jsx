import React, { createContext, useState } from 'react';

export const ThemeContext=createContext();

export const ThemeProvider=({children})=>{
const [status, setStatus]=useState(false);

const handleStatus=()=>{
setStatus(!status);
}


return( <ThemeContext.Provider value={{status,handleStatus}}>{children}</ThemeContext.Provider>
    )
}
