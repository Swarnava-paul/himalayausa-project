
import { createContext,useState } from "react";

export const shopDisplayContext = createContext()

export const ShopDisplayContextProvider =(props)=>{

    const[displayShop,setDisplayShop]=useState('none')

    return(
       < shopDisplayContext.Provider value={{displayShop,setDisplayShop}}>
         {props.children}
       </ shopDisplayContext.Provider>
    )
}