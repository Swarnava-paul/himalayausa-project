import { Flex,Text,Image,Grid, background } from "@chakra-ui/react"

export const Navbar=()=>{

const text={
    color:'grey',
    cursor:'pointer',
}
    return(
        <>
        <Grid  bg='white' position='sticky'>
            <Flex bg='#FF5F00' h='8vh' justify='center' align='center' gap='12' color='white' fontSize='18'>
                <Text fontWeight='900' fontFamily='sans-serif'>FREE SHIPPING</Text>
                <Text fontWeight='500'>ON ALL ORDERS OVER $35</Text>
            </Flex> {/**upper orange flex */}
           
           <Flex justify='space-between'>

           <Flex h='14vh' w='40%'  ml={45}  align='center' justify='space-between' fontSize={22}>
             <Image w='30%' src='https://himalayausa.com/cdn/shop/files/Himalaya_Logo_-_Since_1930_CMYK_-_Reduced_500x.png?v=1673635210'/>
              <Text sx={text}>Shop</Text>
              <Text sx={text}>About</Text>
              <Text sx={text}>Store Locator</Text>
           </Flex>{/** about store ... holder */}

           <Flex w='30%' justify='center' align='center' gap={24} fontSize={25} color='grey' fontWeight='100'>
           <i className="fa-solid fa-magnifying-glass"></i>
           <i className="fa-solid fa-user"></i>
           <i className="fa-solid fa-cart-shopping"></i>
           </Flex>

           </Flex>
        </Grid>
        </>
    )
}