
import { Grid,Flex,Image,Text ,Button} from "@chakra-ui/react"

import { useContext } from "react"
import { shopDisplayContext } from "../shopcontext/shopContext"

export const ShopOnHomePage=()=>{

const b={

padding:"20px"
}
const othertext={
    fontSize:'20px',
    fontWeight:"600",
    fontFamily:"sans-serif"
}

//contexts
const{displayShop,setDisplayShop}=useContext(shopDisplayContext)


    return(
        <>
        <Flex w='100%' display={displayShop} pos='absolute' top='5%'  h='90vh' bg='white' justify='space-evenly' onMouseEnter={()=>{
          setDisplayShop('flex')
        }} onMouseLeave={()=>{
          setDisplayShop('none')
        }}>

          <Grid templateColumns='repeat(3,26%)' templateRows='repeat(2,34vh)' w='70%' gap={5} >
              <Grid sx={b}>
                <Text sx={othertext}>Herbal Suppliments</Text>
                <Text>Single Herb Suppliments</Text>
                <Text>Multi-ingredient suppliment</Text>
              </Grid>
              <Grid sx={b}>
                <Text sx={othertext}>Oral Care</Text>
                <Text>Adult Toothpaste</Text>
                <Text>Child Toothpaste</Text>
              </Grid>
              <Grid sx={b}>
                <Text sx={othertext}>Personal Care</Text>
                <Text>Face Care</Text>
                <Text>Bum</Text>
              </Grid>
              <Grid sx={b}>
                <Text sx={othertext}>Health Interests</Text>
                <Text>Blood Sugar</Text>
                <Text>Brain and congnitive Diagenostic</Text>
              </Grid>
              <Grid sx={b}>
                <Text >Health And Cardio</Text>
                <Text>Immune support</Text>
                <Text>Joint and Mobility</Text>
              </Grid>
              <Grid sx={b}>
                <Text>Respiratory</Text>
                <Text>Sleep</Text>
                <Text>Stress and Mood</Text>
              </Grid>
          </Grid>

          <Grid  w='30%' placeItems='center' h='82vh'>
            <Image w='80%' src='https://himalayausa.com/cdn/shop/files/HUSA_Ashwagandha_90ct_Carton_Bottle_410x.jpg?v=1614373549'/>
            <Button w='60%' bg='RGB(255, 116, 81)' color='white' fontFamily='sans-serif'>Featured Product</Button>
            <Text textAlign='center' fontFamily='sans-serif' fontWeight='600' fontSize={16} color='RGB(119, 119, 119)'>Find out Why Everyone loves Best selling organic Ashwagandha</Text>
          </Grid>

        </Flex>
        </>
    )
}