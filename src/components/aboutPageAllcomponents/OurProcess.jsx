import { Grid , Box ,Image , Text} from "@chakra-ui/react"


export const OurProcess = () =>{

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
  <Grid rowGap={10}>

  <Box sx={box}>
   <Image w={['80%','80%','40%','40%']} margin='auto' src='https://i.shgcdn.com/a802e384-7312-4d13-bda1-8859e1afaecf/-/format/auto/-/preview/3000x3000/-/quality/lighter/'/>
    <Grid rowGap={5}>
       <Text sx={firstTexts}>Purity and Efficacy</Text>
       <Text sx={childTexts}>The complexity and timing of the entire seed-to-shelf process for Himalaya and for the plants themselves, is highlighted by three important mandates: purity, efficacy, and batch-to-batch consistency.</Text>
       <Text sx={childTexts}>We know the success of traditional plant medicine is based on several integral parts that extend from the most advanced agricultural research and practices, to extraction methodologies, to formulating approaches and dosage strategies.</Text>
       <Text sx={childTexts}>To accomplish all of this, Himalaya maintains total control over the farming, harvesting, research, manufacturing, and distribution of all our products.</Text>
    </Grid>
  </Box>

<Box sx={box}>
 <Grid rowGap={5}>
    <Text sx={firstTexts}>Our Farms</Text>
    <Text sx={childTexts}>Himalaya's herbs are grown on over 1,000 acres of farmland through fair trade, farming partnerships. Herbs are also sustainably wildcrafted on over 5,000 acres.</Text>
    <Text sx={childTexts}>Farms are located in regions most suitable to the individual herb so that the best possible quality and potency are achieved in the harvest. Just as one wine grape has more character and flavor when grown in a very specific region, the plants used in healthcare often perform best when they’re grown and harvested in their own unique native soil.</Text>
    <Text sx={childTexts}>Himalaya chooses farm lands based on soil fertility, suitability and quality, visiting the selected land first to ensure the land is free from soil and water erosion, free from pollution and away from industrial zones, free from municipal waste and the flow of rain water from neighboring fields.</Text>
    <Text sx={childTexts}>Farmers are trained in preparing the land, through to post-harvest management of the herbs, and even in proper drying, packaging, storing and labeling.</Text>
    <Text sx={childTexts}>Himalaya’s farmers use only authenticated starting materials; viable seeds with a good germination percentage. A respective Package of Practices (POP) assures adherence to quality, sustainability and careful environmental stewardship at all times.</Text>
    <Text sx={childTexts}>Farmers are trained on earth-friendly organic practices, soil bed preparation, proper irrigation, fertilization and sustainable harvesting, crop rotation, cover crop cultivation and organic soil enrichment. No pesticides are allowed to be used.</Text>
    <Text sx={childTexts}>Careful safety measures are put in place for handling threatened plant populations, and farmers are continually trained on the Good Cultivation Practices specific to each herb. In addition, farmers are trained on Good Agriculture Collection Practices as well.</Text>
    <Text sx={childTexts}>In addition to initial training, two residential workshops are conducted per year, and supervisors visit the farmer’s field regularly to check for compliance in areas such as proper crop management, no chemical usage, no child labor, and appropriate labor hours for adults. Violations do not occur.</Text>
    <Text sx={childTexts}>Himalaya’s agricultural supervisory teams visit farms quarterly, but the frequency of visits may increase depending on the individual needs of the farmer. Himalaya’s inspectors and trainers include our own people with Masters Degrees in botany, MBAs in agri-business management, along with agricultural scientists from reputed universities.</Text>
 </Grid>
 <Image w={['80%','80%','40%','40%']} margin='auto' src='https://i.shgcdn.com/6fdef74e-1e57-4bd4-8f3f-617132184feb/-/format/auto/-/preview/3000x3000/-/quality/lighter/' />
</Box>


<Box sx={box}>

    <Image w={['80%','80%','40%','40%']} margin='auto' src='https://i.shgcdn.com/1ccc967d-5c31-4ca5-8ceb-3a0c95177b71/-/format/auto/-/preview/3000x3000/-/quality/lighter/'/>
    <Grid rowGap={5}>
    <Text sx={firstTexts}>Our Manufacturing</Text>
    <Text sx={childTexts}>In March 2001, Himalaya was granted a Good Manufacturing Practices (GMP) certificate, issued by the Licensing Authority, Directorate of Indian Systems of Medicine, Bangalore, India. Himalaya is the first Ayurvedic facility in India to receive GMP certification.</Text>
    <Text sx={childTexts}>We have also been granted Good Laboratory Practice (GLP) certification. A GLP certification is granted to manufacturing companies that adhere to the toxicity guidelines in nonclinical safety studies. The certification is granted by the National Good Laboratory Practice (GLP) Compliance Monitoring Authority, Department of Science and Technology, Government of India.</Text>
    <Text sx={childTexts}>Only 14 institutions in India have been granted this certificate, and Himalaya is the first herbal company to join their ranks.</Text>
    </Grid>
</Box>


</Grid>
        </>
    )
}