
import { Image,Flex,Button,Grid } from "@chakra-ui/react"

export const MainImage=()=>{

    return(
       <Flex pos='relative'>

       <Image  w='100%' h='120vh' src='https://himalayausa.com/cdn/shop/files/Berberine_2_900x.jpg?v=1689623874'/>
        <Grid className="mainImageFlex" >
            <Flex justify='center' align='center' fontSize={46} backgroundColor='white' h='60%' opacity='0.7'>BERBERINE</Flex>
            <Flex fontSize={19} color='white' justify='center' w='90%'>Potent Plant-Based Support for Daily Wellness.</Flex>
            <Button fontSize={13} w='50%' h='9vh' borderRadius={0} border='none' bg='#5DEBD7'>SHOP NOW</Button>
        </Grid>
       </Flex>
    )
}