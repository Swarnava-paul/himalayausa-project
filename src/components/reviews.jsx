// chakra
import { Grid,Flex,Text } from "@chakra-ui/react"
import { useState,useEffect,useRef } from "react"

export const Reviews=()=>{

    // state for maintain position translateX value
    const[position,setPosition]=useState(0)
    const[scrollCount,setScrollCount]=useState(0)
    const intervalValue=useRef(false)


    useEffect(()=>{

   if(intervalValue.current!==false){
    clearInterval(intervalValue.current)
   }

   intervalValue.current = setInterval(()=>{
   setPosition(position=>position+380)
   setScrollCount(scrollCount=>scrollCount+1)
   },3000)

   if(scrollCount==7){
    clearInterval(intervalValue.current)
    setPosition(0)
    setScrollCount(0)
   }

   return ()=>clearInterval(intervalValue.current)

    },[position])

    {/*use effect to manages automatic scroll*/}

    const reviewsArray=[
        {review:'"i have seen such a drastic difference in my memory , its hard to believe"',reviewerName:'Bacapa'},
        {review:'"Other Whitening toothpastes have not given these kind of results"',reviewerName:'Gymena'},
        {review:'"I will never use another toothpastes as long as i can get this one"',reviewerName:'Tumaric 95'},
        {review:'"Seriously they are the most effective cough drops ever"',reviewerName:'Koflet Lozenges'},
        {review:'"I feel extremely focused .I was joking to myself that i feel like Einstine"',reviewerName:'Bacapa'},
        {review:'"We have tried countless fluoride-free toothpastes, and this is our favorite"',reviewerName:'Ashwagandha'},
        {review:'"I work in Supplement Industry and THIS is the Tumeric you should use"',reviewerName:'Anlzala'},
        {review:'"I can not go a day Without it. A total game-changer for Stress"',reviewerName:'Russo Diana Gonlazbes'},
        {review:'"I am Amazed. I am less ittirable and tried , and more calm and centereed "',reviewerName:'Liver Care'},

]


    return(
        <>
     <Flex overflowX="scroll" width="100%" align='center'>
      
      <Flex transition='2s' transform={`translateX(-${position}px)`}>
      {

      reviewsArray.map((item, index) => (
        <Grid key={index} flex="0 0 auto" w={350} className="childofReview" h="33vh" m='0.9rem'>

          <Grid mt={10} ml={10} pr={5}>
         <Flex w='8%' h='1vh' backgroundColor='teal'></Flex>
         <Text fontSize={16} fontFamily='sans-serif'>{item.review}</Text>
         <Text color='grey'>{item.reviewerName}</Text>
         </Grid>

        </Grid>
      ))
      
      }
      </Flex>

    </Flex>
        </>
    )
}