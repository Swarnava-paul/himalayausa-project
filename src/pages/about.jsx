import { useReducer } from "react";

// CHAKRA
import { Box ,Image , Grid , Text, Flex ,Button, background} from "@chakra-ui/react";
//COMPONENTS
import { OurStory } from "../components/aboutPageAllcomponents/ourStory";
import { OurRoots } from "../components/aboutPageAllcomponents/ourRoots";
import { OurProcess } from "../components/aboutPageAllcomponents/OurProcess";
import { OurScience } from "../components/aboutPageAllcomponents/ourScience";
import { OurInitiative } from "../components/aboutPageAllcomponents/ourInitiatives";


function determineComponentOfAboutPage (componentOfAboutPage,action) {
 
switch (action.type){
 
    case 'our-story' : {
       return {
        component : <OurStory/>,
        text : 'our-story'
       }
    }

    case 'our-roots' : {
        return {
            component : <OurRoots/> ,
            text : 'our-roots'
        }
    }

    case 'our-process' : {
        return {
            component : <OurProcess/> ,
            text : 'our-process'
        }
    }

    case 'our-science' : {
        return {
            component : <OurScience/> ,
            text : 'our-science'
        }
    }

    case 'our-initiative' : {
        return {
            component :<OurInitiative/>,
            text : 'our-initiatives'
        }
    }
}
} {/**manages the component of about page to be displayed on buttons click */}



const About=()=>{

const[componentOfAboutPage , dispatch] = useReducer(determineComponentOfAboutPage,{component:<OurStory/>,text:'our-story'})

const text = {
 fontSize:"56px",
 color:"white",
 fontWeight:"700"
}

const gridOfpositionedText = {
    margin:'-25% 10%',
    placeItems:"center",
}

const buttonContentWithDispatch = [
    {text:'OUR STORY', dis :'our-story'},
    {text:'OUR ROOTS' , dis:'our-roots'},
    {text:'OUR PROCESS' , dis:'our-process'},
    {text:'OUR SCIENCE' , dis:'our-science'},
    {text:'OUR INITIATIVES' , dis:'our-initiative'},
]

const buttonStyle = {
    width:"15%",
    borderRadius:"0px",
    fontWeight:"450"
}
    return(
    <Box mt={20}>
     <Box h='80vh' pos='relative'>
        <Image h='100%' w='100%' src='https://i.shgcdn.com/f95290db-d02e-433c-9564-4766788d684c/-/format/auto/-/preview/3000x3000/-/quality/lighter/'/>
         <Grid sx={gridOfpositionedText}>
            <Text sx={text}>Our Story</Text>
            <Text color='white' fontSize={25} fontWeight='600' textAlign='center'>Founded in 1930, Himalaya remains family owned with products offered in over 100 countries.</Text>
         </Grid>
     </Box> {/** box  holds main image of about page */}

      <Flex mt={5} justify='space-evenly'>
         {
            buttonContentWithDispatch.map((button , id) => (
               <Button sx={buttonStyle} backgroundColor={componentOfAboutPage.text== button.dis ? 'RGB(0, 102, 102)' : 'white'} color={componentOfAboutPage.text== button.dis ? 'white' : 'RGB(0, 102, 102)'} key={id} onClick={()=>{
                dispatch({type:button.dis})
               }}>{button.text}</Button>
            ))
         }
      </Flex>
      <Flex w='100%' justify='center'>
      <hr style={{borderColor:"red",marginTop:"10px",width:'93%'}}/>
      </Flex>
    {
     componentOfAboutPage.component
    } 
    </Box>


    )
}

export default About;