import { Box,Image,Text } from "@chakra-ui/react"

export const OurRoots = () =>{

  const allTexts = {
    fontFamily:'sans-serif',
    color:'RGB(51, 51, 51)'

  }
  return(
    <>
    <Box display={['grid','grid','flex','flex']} gap={10} p={12}>
        <Image h={['55vh','55vh','50vh','65vh']} w={['90%','90%','40%','40%']} margin='auto' src='https://i.shgcdn.com/f95290db-d02e-433c-9564-4766788d684c/-/format/auto/-/preview/3000x3000/-/quality/lighter/'/>
        <Box  display='grid' rowGap={5}>
        <Text color='RGB(0, 102, 102)' fontSize={28} fontWeight='700' fontFamily='sans-serif'>Our Roots</Text>
        <Text sx={allTexts}>The herbs used in Himalaya Herbal Healthcare's scientific product line are also used in the world's oldest traditional system of medicine, Ayurveda, which dates back over 4,000 years.</Text>
        <Text sx={allTexts}>The word Ayurveda comes from the Sanskrit root words ayur, meaning “life” and veda, meaning “to know.” Ayurveda literally means "to know life,” or in the language of today, “the science of life.”</Text>
        <Text sx={allTexts}>Ayurveda had a profound, far-reaching influence on Traditional Chinese Medicine and the healthcare systems of many other countries and cultures that followed. Today, thanks to the dedicated efforts of Himalaya’s doctors and scientists, it’s been proven effective through scientific validation.</Text>
        <Text sx={allTexts}>Ayurveda acknowledges there are five elements that make up the universe and the human body; earth, water fire, air and space. It seeks to bring the constellation and characteristics of the three body types defined by those elements – the vata, pitta and kapha – back into balance through proper diet, herbal treatment, and emotional well-being.</Text>
        <Text sx={allTexts}>We’re proud of the ancient roots and our modern branches that allow us to continue unlocking the powerful healing benefits of Ayurveda, but our formulas are science-based and appropriate for all body types. They require no Ayurvedic knowledge to be used successfully.</Text>
        </Box>
    </Box>
    </>
  )
}