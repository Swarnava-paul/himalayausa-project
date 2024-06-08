//chakra
import { Grid } from "@chakra-ui/react"

//COMPONENTS
import { FooterBigScreen } from "./footerBigscreen"
import { FooterForSmallScreens } from "./footerSmallScreens"
export const Footer=()=>{

    return(
        <>
        <Grid h={['auto','auto','auto','120vh']} bg='RGB(238, 242, 240)' mt={120}>
        <FooterBigScreen />
        <FooterForSmallScreens/>
        </Grid>
        </>
    )
}


