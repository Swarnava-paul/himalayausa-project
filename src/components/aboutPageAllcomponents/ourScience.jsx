import { Grid,Box,Image,Text } from "@chakra-ui/react"

export const OurScience = () =>{

    const box = {
        display:['grid','grid','flex','flex'],
        padding:'30px',
        gap:'15px'
    }

    const firstTexts = {
        color:"RGB(0, 102, 102)",
        fontSize:'26px',
        fontFamily:'sans-serif',
        fontWeight:'700'
    }

    const childTexts = {
        color:'RGB(51, 51, 51)',
        fontFamily:"sans-serif"
    }

    return(
        <>
        <Grid rowGap={20}>
        <Box sx={box}>

       <Image w={['80%','80%','46%','46%']} margin='auto' src='https://i.shgcdn.com/a094b44f-0f48-4abf-b25b-549315cc3d98/-/format/auto/-/preview/3000x3000/-/quality/lighter/'/>
       <Grid rowGap={5}>
       <Text sx={firstTexts}>Our Science</Text>
       <Text sx={childTexts}>Himalaya's core interest has always been to ensure the health benefits of our herbal formulas and standalone solo herbs with product-specific, double-blind, placebo-controlled human clinical trials on all of our products.</Text>
       <Text sx={childTexts}>Our commitment to Ayurvedic principles, and research to produce natural, safe, and effective health products is driven by our soul mission, which is to help individual people maintain a healthy, long, and high-quality of life.</Text>
       <Text sx={childTexts}>We take pride in the fact that our formulas undergo years of primary research before we offer them to you. Our commitment to ensure we have product-specific science on hand before we launch a product into the marketplace is exceptional within the natural products industry.</Text>
       <Text>Himalaya has conducted over 1,200 clinical studies, many of which have been published in numerous, highly-regarded medical journals including The European Journal of Pharmacology, Phytotherapy Research, The Indian Journal of Clinical Practice, Australian Journal of Medical Herbalism, and JAMA, India.</Text>
       </Grid>

        </Box>


<Box sx={box}>
 <Grid rowGap={1}>
    <Text sx={firstTexts}>Our Distribution</Text>
    <Text sx={childTexts}>After being grown, manufactured and packaged in India, finished Himalaya products are shipped to our North American corporate office, warehouse and distribution center located in Sugar Land, Texas.</Text>
    <Text sx={childTexts}>Here we maintain state-of-the-art storage and shipping processes in climate-controlled environments until our products make their way to our retailers, and then to your home.</Text>
 </Grid>
 <Image w={['80%','80%','40%','40%']} margin='auto' src='https://i.shgcdn.com/5a1a59af-3931-4d16-bff2-004468e44137/-/format/auto/-/preview/3000x3000/-/quality/lighter/' />
</Box>

        </Grid>
        </>
    )
}