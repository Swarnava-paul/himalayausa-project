import { Text,Image,Grid,Flex ,Box} from "@chakra-ui/react"

// components
import {Reviews} from '../components/reviews'
export const BestSeller=()=>{

    return(
        <>
         <Grid mt={200} placeItems='center' rowGap={30} on>
            <Text fontSize={30} fontWeight='500' fontFamily='sans-serif' color='RGB(51, 51, 51)'>Best Sellers</Text>
             <Box bg='whitesmoke'  w='90%' align='center' placeItems={['center','center','center','space-evenly']} p={10} display={['grid','grid','grid','flex']}>
                <Image w={['40%','30%','20%','20%']} src='https://cdn.shopify.com/s/files/1/0399/1728/9633/files/StressCareA-Main-647x1024.png?v=1591359475'/>
                <Grid w={['100%','100%','100%','70%']} rowGap={15} fontFamily='sans-serif'>
                 <Text fontSize={['25','26','30','35']} >Unlock the Wisdom of Herbs</Text>
                 <Text fontSize={['20','22','25','27']}>with Herbal Supplements, Toothpaste & More!</Text>
                 <Box >
                 <Text>Since 1930, Himalaya has been passionate about the healing wisdom of herbs. We offer a wide range of clinically-studied herbal supplements, toothpaste and personal care products that unlock the powerful healing benefits of herbs.</Text>

                 </Box>
                </Grid>
             </Box> {/** best seller first section */}

             <Reviews/>
         </Grid>
        </>
    )
}