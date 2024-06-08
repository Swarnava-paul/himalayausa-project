import { Flex ,Grid,Text,Input,Box} from "@chakra-ui/react"

export const FooterBigScreen=()=>{

const ChildGrid={
    width:'24%',
    padding:"20px",
    alignItems:"center",
    rowGap:"20px"
}

const firstHeadingTexts={
    fontSize:"19px",
    fontFamily:"sans-serif",
    fontWeight:"600"
}
const allChildText={
    color:"RGB(102, 118, 95)",
    fontSize:"17px",
    fontFamily:"sans-serif"
}

{
    /**

     */
}
    return(
        <Box display={['none','none','none','grid']} pb={50}>
        <Flex h='80%' justify='space-evenly'>
            <Grid sx={ChildGrid}>
                <Text sx={firstHeadingTexts}>Info</Text>
                <Text sx={allChildText}>Contact Us</Text>
                <Text sx={allChildText}>FAQ</Text>
                <Text sx={allChildText}>Blog</Text>
                <Text sx={allChildText}>Store Locator</Text>
                <Text sx={allChildText}>Careers</Text>
            </Grid>

            <Grid sx={ChildGrid}>
                < Text sx={firstHeadingTexts}>Policies</Text>
                <Text sx={allChildText}>Shipping & Returns</Text>
                <Text sx={allChildText}>Terms & Conditions</Text>
                <Text sx={allChildText}>Privacy</Text>
                <Text sx={allChildText}>CCPA</Text>
                <Text sx={allChildText}>Accessibility</Text>
            </Grid>
            <Grid sx={ChildGrid}>
                <Text  sx={firstHeadingTexts}>Contact Us</Text>
                <Text sx={allChildText}>Email:</Text>
                <Text sx={allChildText}>writetous@himalayausa.com</Text>
                <Text sx={allChildText}>Phone:</Text>
                <Text sx={allChildText}>1-800-869-4640</Text>
                <Text sx={allChildText}>Mon-Fri, 8am-5pm CT</Text>
                <Text sx={allChildText}>Mail:</Text>
                <Text sx={allChildText}>Himalaya Wellness</Text>
                <Text sx={allChildText}>1101 Gillingham LaneSugar Land, TX 77478</Text>
            </Grid>
            <Grid sx={ChildGrid}>
                <Text  sx={firstHeadingTexts}>Subscribe to Our Newsletter!</Text>
                <Flex align='center' bg='white' h='10vh' borderRadius={8}>
                  <Input bg='none' placeholder="Enter Your Email" border='none' outline='none' w='90%' h='100%'></Input>
                  <i style={{fontSize:"22px"}} className="fa-regular fa-envelope"></i>
                </Flex>
                <Text>By entering your email, you agree to our Terms & Conditions and Privacy Policy.</Text>
            </Grid>
        </Flex>

        <Grid >
            <Text ml={50} sx={allChildText}>© 2022 Himalaya Wellness. All rights reserved.</Text>
            <Flex className="border">*THESE STATEMENTS HAVE NOT BEEN EVALUATED BY THE FOOD AND DRUG ADMINISTRATION. THIS PRODUCT IS NOT INTENDED TO DIAGNOSE, TREAT, CURE OR PREVENT ANY DISEASE.</Flex>
        </Grid>

        </Box>
    )
}