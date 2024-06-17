import { AspectRatio,Grid,Image,Text,Box } from '@chakra-ui/react'


export const OurInitiative = () =>{

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
        fontFamily:"sans-serif",
        fontSize:'16px'
    }

    return(
        <>
 <Grid rowGap={10}>

<Box sx={box}>
  <Grid rowGap={5} w={['100%','100%','100%','45%']}  margin='auto'>
     <Text sx={firstTexts}>Biodiversity Conservation for Sustainable Living</Text>
     <Text sx={childTexts}>Care for the earth remains a cornerstone of Himalaya Wellness Company’s core philosophy. Biodiversity for sustainable living is the practice of protecting and preserving the variety of species, habitats, ecosystems, and genetic diversity on earth, and Himalaya has made this an important part of our mission since we started over 90 years ago</Text>
     <Text sx={childTexts}>The video you're about to see shows Himalaya Wellness Company's initiatives in conservation, sustainability and replanting. Himalaya believes in nurturing the goodness of nature with a promise to safeguard the environment and a pledge to restore and conserve biodiversity.</Text>
  </Grid>
  <iframe style={{margin:"auto"}} width="550" height="320" src="https://www.youtube.com/embed/zubH7PytqpM" title="Himalaya Wellness Company&#39;s Initiatives in Conserving Biodiversity for Sustainable Living" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullscreen></iframe>    
</Box>

<hr style={{border:'0.50px solid grey',width:'95%',margin:'auto'}} />

<Box sx={box}>
<Image w={['80%','80%','45%','45%']} margin='auto' src='https://i.shgcdn.com/6288998b-545b-4de3-946e-6317b6fe72f6/-/format/auto/-/preview/3000x3000/-/quality/lighter/' />
<Grid rowGap={5}>
  <Text sx={firstTexts}>Commitment to Farmers</Text>
  <Text sx={childTexts}>Himalaya works one-on-one with farmers and through non-governmental organizations to help bring poorer farming communities a link to the marketplace. Through fair trade cooperative agreements, our goal is to help economically empower small and marginal farmers so they can further their livelihood.</Text>
  <Text sx={childTexts}>Himalaya’s fair trade practices assure farmers are paid a minimum of 15-20% higher than the actual cost of cultivation. In addition to favorable wages, other benefits to the farmers include an assured market for their crops, an assured price and income (we protect them from the ups and downs of the market), and the costs for their required certifications, packaging and transportation are borne by us, not them.</Text>
</Grid>
</Box>

<hr style={{border:'0.50px solid grey',width:'95%',margin:'auto'}} />

<Box sx={box}>
  <Grid rowGap={5}>
  <Text sx={firstTexts}>Partnership with Vitamin Angels</Text>
  <Text sx={childTexts}>Himalaya continues to be a proud supporter of Vitamin Angels, a worldwide non-profit organization helping to save the lives and eyesight of nutrient deficient children. Vitamin Angels reduces child mortality by connecting infants and children under five with vital nutrients.</Text>
  <Text sx={childTexts}>It only takes 50¢ to reach one child twice a year with enough vitamin A to reduce childhood mortality by 24% and ensure a child's eyesight. Vitamin Angels gives children a chance for a brighter future, and Himalaya is proud to be an ongoing supporter of their work.</Text>
  </Grid>
  <Image w={['80%','80%','45%','45%']} margin='auto' src='https://i.shgcdn.com/68587d5b-0706-4d21-b1f1-59e35de255e8/-/format/auto/-/preview/3000x3000/-/quality/lighter/'/>
</Box>

<hr style={{border:'0.50px solid grey',width:'95%',margin:'auto'}} />


<Box sx={box}>
<Image w={['80%','80%','45%','45%']} margin='auto' src='https://i.shgcdn.com/f86febe0-9c1e-466f-b189-842f750669b3/-/format/auto/-/preview/3000x3000/-/quality/lighter/'/>
  <Grid rowGap={5}>
  <Text sx={firstTexts}>Trees for Life</Text>
  <Text sx={childTexts}>Himalaya has been planting trees in the Western Ghats of India since 2011. The Western Ghats is identified as a biodiversity hotspot by UNESCO, the United Nations Educational, Scientific and Cultural Organization.</Text>
  <Text sx={childTexts}>Some of the medicinal trees planted include Ashwagandha, Arjuna, Amla and Hirada. The program also supports the planting of fruit trees such as mango, papaya, banana and cashew nut, which generate income to local farmers in the program and serve as supplementary nutrition. In addition, we have also planted Abutilon ranadei, a native plant that is critically endangered.</Text>
  </Grid>
</Box>

<hr style={{border:'0.50px solid grey',width:'95%',margin:'auto'}} />


<Box sx={box}>
  <Grid rowGap={5}>
  <Text sx={firstTexts}>Certification for Environmental Management</Text>
  <Text sx={childTexts}>Himalaya has taken several steps to conserve water, power and reduce pollution to meet National Quality Assurance (NQA) guidelines. The most significant achievement has been setting up a water treatment plant and sourcing water with low Total Dissolved Solids (TDS) externally. This has reduced Himalaya’s water consumption by as much as 10,000 liters a day.</Text>
  <Text sx={childTexts}>Himalaya has been awarded ISO-14001:2004 certification, the most recognized standard globally, for environment management. The certification is granted by National Quality Assurance (NQA), the UK's largest established certification body.</Text>
  </Grid>
  <Image w={['80%','80%','45%','45%']} margin='auto' src='https://i.shgcdn.com/6fdef74e-1e57-4bd4-8f3f-617132184feb/-/format/auto/-/preview/3000x3000/-/quality/lighter/'/>
</Box>

<hr style={{border:'0.50px solid grey',width:'95%',margin:'auto'}} />


<Box sx={box}>
<Image w={['80%','80%','45%','45%']} margin='auto' src='https://i.shgcdn.com/87244901-21ea-4e12-91a6-08edec634fe5/-/format/auto/-/preview/3000x3000/-/quality/lighter/'/>
<Grid h='30vh' rowGap={5}>
  <Text sx={firstTexts}>Autism Hope Alliance</Text>
  <Text sx={childTexts}>Himalaya Herbal Healthcare is a proud Autism Approved® sponsor of the Autism Hope Alliance. Himalaya’s continued charitable donation helps support families facing an autism diagnosis. The Autism Hope Alliance embodies hope for families through education, financial support and volunteerism. They are also the first nonprofit foundation for Autism to emerge from the natural foods industry.</Text>
</Grid>
</Box>

</Grid>
        </>
    )
}