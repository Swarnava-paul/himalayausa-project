// lazy and suspense
import { lazy} from "react";
import { Suspense } from "react";
import { Routes,Route } from "react-router-dom";
//pages
const Home = lazy(()=>import('../pages/home'))
const About = lazy(()=>import('../pages/about'))
const StoreLocator = lazy(()=>import('../pages/storelocate'))

export const AllRoutes=()=>{


    return(
        <Suspense fallback={<>Loading ...</>}>
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/storeLocator" element={<StoreLocator/>}/>
        </Routes>
        </Suspense>
    )
}