

import { createContext ,useState} from "react";


export const hamburgerCOntext=createContext()


export const HamburgerContextProvider=({children})=>{

    const[displayHamburger,setDisplayHamburger]=useState('none')


 return(
    <hamburgerCOntext.Provider value={{displayHamburger,setDisplayHamburger}}>
    {children}
  </hamburgerCOntext.Provider>
 )

}