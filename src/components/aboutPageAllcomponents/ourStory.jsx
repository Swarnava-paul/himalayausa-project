import {Image , Grid , Text, Flex,Box } from "@chakra-ui/react";


export const OurStory = () =>{


  

    return (
        <>
        <Grid p={10}>

           <Box display={['grid','grid','flex','flex']} gap={10} justifyContent={['' ,'' ,'center','center']} placeItems={['center','center','','']}>
               <Image w='40%' src='https://i.shgcdn.com/4075e3a0-9129-48bd-bfe7-42fc93fe2397/-/format/auto/-/preview/3000x3000/-/quality/lighter/'/>
                <Grid w='50%' rowGap={10}>
                    <Text color='RGB(0, 102, 102)' fontSize={27} fontWeight='700' fontFamily='sans-serif'>From Humble Beginnings</Text>
                    <Grid rowGap={10} fontSize={18} fontFamily='sans-serif' color='RGB(51, 51, 51)'>
                        <Text>While riding through the forests of Burma, our founder, Mr. M. Manal, saw a villager pacify a restless elephant by feeding it the root of the plant Rauwolfia serpentina.</Text>
                        <Text>Fascinated by the plant's effect on the elephant, he returned home to India to seek scientific evidence for why this particular plant would have such a beneficial, calming effect. Young Manal's mother gave him her bangles to sell so he could pursue his work, and Himalaya was born.</Text>
                        <Text>Once he fully understood the science behind this special botanical, Mr. Manal bought a hand-operated, tablet-compressing machine and began his work. At night, his shoulders would ache from producing a few hundred tablets, one small tablet at a time. But his hard work paid off. This remarkable plant would later become Serpina, the world’s first anti-hypertensive drug in 1934.</Text>
                        <Text>We remain in awe of the man who began our company, and the grandfather of our current CEO, Nabeel Manal. Himalaya’s legacy has always been one of researching nature and using the tools of modern science to develop and produce Ayurveda-based, pharmaceutical-grade herbal medicine products. And today, that legacy continues.</Text>
                        <Text>Mr. Manal had a vision of helping people be well. Today, Himalaya Herbal Healthcare has turned a time-honored herbal tradition into a complete range of contemporary, proprietary formulas and single herbs products.</Text>
                    </Grid>
                </Grid>
           </Box>{/**this box holds image and text */}

           <Box gap={14} display={['grid','grid','flex','flex']} mt={50} justifyContent={['' ,'' ,'center','center']} placeItems={['center','center','','']}>
              <Grid w='50%' gap={10}>
                <Text fontSize={26} color='RGB(0, 102, 102)' fontWeight='700' fontFamily='sans-serif'>The Himalaya Legacy Now Spans Over 90 Years</Text>
                <Text fontSize={18} fontFamily='sans-serif'>Founded in 1930, the Himalaya legacy now spans over 90 years, stretching from one man, to his son, to his grandson. From our humble beginnings in India, our products are now offered in over 100 countries, yet we’re still family owned.</Text>
                <Text fontSize={18} fontFamily='sans-serif'>Himalaya offers a full line of clinically-studied herbal formulations, certified USDA organic Single herbs, and a full line of body care products. Integrating the principles of traditional medicine with modern science, Himalaya is a worldwide pioneer in the field of scientifically validated herbal healthcare.</Text>
                <Text fontSize={18} fontFamily='sans-serif'>Himalaya's North American LEED® Gold-Certified eco-friendly corporate office and warehouse facility are located in Sugar Land, Texas, a community neighboring Houston.</Text>
              </Grid>
             <Image w='40%' src="https://i.shgcdn.com/59ff8391-0e4c-47df-9848-556c4521753e/-/format/auto/-/preview/3000x3000/-/quality/lighter/"/>
           </Box>

        </Grid>
        </>
    )
}