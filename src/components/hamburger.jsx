
import { Grid,Box,Flex ,Text} from "@chakra-ui/react"

import { useContext } from "react"

//CONTEXT
import { hamburgerCOntext } from "../hamburgercontext/hamburgercontext"

export const Hamburger=()=>{

    const{displayHamburger,setDisplayHamburger}=useContext(hamburgerCOntext)

    return(
        <Box display={[displayHamburger,displayHamburger,displayHamburger,'none']} w='100%' bg='rgb(26, 33, 48,0.5)'  pos='absolute' h='100vh' position='fixed' top='0vh'>
           <Grid w='70%' bg='white' h='100%'>

               <Flex p={2} bg='white' align='center' gap={3} onClick={()=>{
                setDisplayHamburger('none')
               }}>
               <i className="fa-solid fa-xmark"></i>
                  <Text>Close</Text>
               </Flex>

                <Grid  rowGap={1} bg='white' h='auto' fontSize={19} fontFamily='sans-serif' fontWeight='500' mt={1} pl={5} color='RGB(130, 109,)'>
                    <Text>Shop</Text>
                    <Text>About</Text>
                    <Text>Store Locator</Text>
                </Grid>
                  
                 <Grid bg='white' rowGap={4}  pb={5}  mt={40} pl={5} fontSize={20} fontWeight='700' fontFamily='sans-serif'>
                     <Text >My Account</Text>
                     <Flex align='center'  gap={4}>
                     <i className="fa-solid fa-lock"></i>
                     <Text fontWeight='400'>Sign In</Text>
                     </Flex>

                     <Flex align='center'  gap={4}>
                     <i className="fa-regular fa-user"></i>
                      <Text fontWeight='400'>User</Text>
                     </Flex>

                     <Flex align='center'  gap={4}>
                     <i className="fa-solid fa-check-double"></i>
                     <Text fontWeight='400'>Checkout</Text>
                     </Flex>
                 </Grid>

           </Grid>
        </Box>
    )
}