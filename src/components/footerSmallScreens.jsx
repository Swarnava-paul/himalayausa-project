
import { useState } from "react"

import { Flex ,Text,Button, Grid} from "@chakra-ui/react"
export const FooterForSmallScreens=()=>{

    const footerTexts=[
        {head:'Info',t1:"Contact Us",t2:"FAQ",t3:"Blog",t4:"Store Locator",t5:"Careers"},
        {head:'Policies',t1:"Shipping & Returns",t2:"Terms & Conditions",t3:"Privacy",t4:"CCPA",t5:"Accessibility"},
        {head:'Contact Us',t1:"Email:",t2:"writetous@himalayausa.com",t3:"Phone:",t4:"1-800-869-4640",t5:"Mon-Fri, 8am-5pm CT",t6:"Mail:",t7:"Himalaya Wellness",t8:"1101 Gillingham LaneSugar Land, TX 77478​"},
        {head:'Subscribe to Our Newsletter!',t1:"By entering your email, you agree to our Terms & Conditions and Privacy Policy."},
]

    return(
        <Grid rowGap={10} pt={20} pb={50} display={['grid','grid','grid','none']}>
        {
            footerTexts.map((item,index)=>(
                <EachBoxes key={index} item={item}/>
            ))
        }

        <Grid rowGap={10}>
            <Text ml={50} >© 2022 Himalaya Wellness. All rights reserved.</Text>
            <Flex className="border">*THESE STATEMENTS HAVE NOT BEEN EVALUATED BY THE FOOD AND DRUG ADMINISTRATION. THIS PRODUCT IS NOT INTENDED TO DIAGNOSE, TREAT, CURE OR PREVENT ANY DISEASE.</Flex>
        </Grid>
        </Grid>
    )
}

const EachBoxes=({item})=>{

    const[displayBox,setDisplayBox]=useState('hide')

  return(
    <>
            {
            (displayBox=='hide'?(
              <Flex ml={20} align='center' justify='space-between' w='90%' margin='auto'>
                <Text fontSize={26} fontFamily='sans-serif' fontWeight='300'>{item.head}</Text>
                <Button onClick={()=>{setDisplayBox('display')}}><i style={{fontSize:"22px"}} className="fa-solid fa-chevron-up"></i></Button>
              </Flex>
            ):(
            <Grid alignItems='center'>
             <Flex ml={20} align='center' justify='space-between' w='90%' margin='auto'>
                <Text fontSize={26} fontFamily='sans-serif' fontWeight='300'>{item.head}</Text>
                <Button onClick={()=>{setDisplayBox('hide')}}><i style={{fontSize:"22px"}} className="fa-solid fa-chevron-down"></i></Button>
              </Flex>
                <Grid ml={20} fontSize={22} w='90%' margin='auto' rowGap={4} mt={6}>
                <Text>{item.t1}</Text>
                <Text>{item.t2}</Text>
                <Text>{item.t3}</Text>
                <Text>{item.t4}</Text>
                <Text>{item.t5}</Text>
                <Text>{item.t6}</Text>
                <Text>{item.t7}</Text>
                <Text>{item.t8}</Text>
                </Grid>
            </Grid>
            ))
        }
    </>
  )
}