
import { Image,Flex,Button,Grid ,Box} from "@chakra-ui/react"
import { useContext } from "react"
import { shopDisplayContext } from "../shopcontext/shopContext"
export const MainImage=()=>{

    const{displayShop}=useContext(shopDisplayContext)

    return(
       <Box display={displayShop=='none'?'block':'none'}>
       <Flex position='relative'>

       <Image  w='100%' h={['80vh','95vh','100vh','120vh']} src='https://himalayausa.com/cdn/shop/files/Berberine_2_900x.jpg?v=1689623874'/>
        <Grid className="mainImageFlex"  w={['70%','60%','60%','35%']} ml={['3','5','3','']}>
            <Flex justify='center' align='center' fontSize={['26','26','36','40']} backgroundColor='white' h='60%' opacity='0.7'>BERBERINE</Flex>
            <Flex fontSize={19} color='white' justify='center' w='90%'>Potent Plant-Based Support for Daily Wellness.</Flex>
            <Button fontSize={13} w={['40%','52%','54%','50%']} h={['6vh','6vh','8vh','9vh']} borderRadius={0} border='none' bg='#5DEBD7'>SHOP NOW</Button>
        </Grid>
       </Flex>
       </Box>
    
    )
}