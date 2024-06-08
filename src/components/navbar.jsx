import { Flex,Text,Image,Grid,Box} from "@chakra-ui/react"
import { shopDisplayContext } from "../shopcontext/shopContext"

import { useContext } from "react"

export const Navbar=()=>{

const text={
    color:'grey',
    cursor:'pointer',
}

const{setDisplayShop}=useContext(shopDisplayContext)

    return(
        <>
        <Grid  bg='white' position='sticky' >
            <Flex bg='#FF5F00' h='8vh' justify='center' align='center' gap='12' color='white' fontSize={['11','13','15','18']}>
                <Text fontWeight='900' fontFamily='sans-serif'>FREE SHIPPING</Text>
                <Text fontWeight='500'>ON ALL ORDERS OVER $35</Text>
            </Flex> {/**upper orange flex */}
           
           <Flex justify='space-between' p={['10px','10px','10px','0px']}>

           <Flex h='14vh' gap={['9px','0px','0px','0px']} w={['36%','39%','35%','40%']} justifyContent='space-evenly'  ml={['10px','10px','10px','40px']}  align='center' justify='space-between' fontSize={20}>

            <Box display={['block','block','block','none']}><i className="fa-solid fa-bars-staggered"></i></Box>{/**hamburger icon */}

             <Image w={['100%','50%','40%','30%']} src='https://himalayausa.com/cdn/shop/files/Himalaya_Logo_-_Since_1930_CMYK_-_Reduced_500x.png?v=1673635210'/>
              <Box w='80%'  display={['none','none','none','flex']} justifyContent='space-evenly' h='100%' alignItems='center'>
        
             <Box  h='16vh' display='flex' alignItems='center' onMouseEnter={()=>{
                setDisplayShop('flex')
              }} onMouseLeave={()=>{
                setDisplayShop('none')
              }}>
             <Text sx={text}>Shop</Text>
             </Box>
              <Text sx={text}>About</Text>
              <Text sx={text}>Store Locator</Text>

              </Box>
           </Flex>{/** about store ... holder */}

           <Flex  w={['40%','35%','20%','30%']} justify='center' align='center' gap={['30px','36px','39px','24']} fontSize={25} color='grey' fontWeight='100'>
           <i className="fa-solid fa-magnifying-glass"></i>
           <i className="fa-solid fa-user"></i>
           <Box display={['none','none','none',"block"]}><i className="fa-solid fa-cart-shopping"></i></Box>
           </Flex>

           </Flex>
        </Grid>
        </>
    )
}