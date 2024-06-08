import { Text,Image,Grid,Flex } from "@chakra-ui/react"

// components
import {Reviews} from '../components/reviews'
export const BestSeller=()=>{

    return(
        <>
         <Grid mt={200} placeItems='center' rowGap={30}>
            <Text fontSize={30} fontWeight='500' fontFamily='sans-serif' color='RGB(51, 51, 51)'>Best Sellers</Text>
             <Flex bg='whitesmoke'  w='95%' align='center' justify='space-evenly' p={10}>
                <Image w='15%' src='https://cdn.shopify.com/s/files/1/0399/1728/9633/files/StressCareA-Main-647x1024.png?v=1591359475'/>
                <Grid w='70%' rowGap={15} fontFamily='sans-serif' >
                 <Text fontSize={35} >Unlock the Wisdom of Herbs</Text>
                 <Text fontSize={27}>with Herbal Supplements, Toothpaste & More!</Text>
                 <Text>Since 1930, Himalaya has been passionate about the healing wisdom of herbs. We offer a wide range of clinically-studied herbal supplements, toothpaste and personal care products that unlock the powerful healing benefits of herbs.</Text>
                </Grid>
             </Flex> {/** best seller first section */}

             <Reviews/>
         </Grid>
        </>
    )
}