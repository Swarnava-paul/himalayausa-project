import { Grid,Flex ,Image,Text} from "@chakra-ui/react"
export const ShopByCategory=()=>{

    const imageArray=['https://himalayausa.com/cdn/shop/files/HUSA-Ashwagandha-90ct-Carton_Bottle-square_1024x.png?v=1614392545',
        'https://himalayausa.com/cdn/shop/files/WCC-SIMPLY-MINT-RENDER-WITH-BRUSH-High-Res_1024x.png?v=1614392545',
        'https://himalayausa.com/cdn/shop/files/Face_Wash-Balancing-Box-Bottle-square_1024x.png?v=1614392545'
    ]

    return(
        <>
         <Grid mt={40}>
            <Flex justify='center' fontSize={30} fontFamily='sans-serif'>Shop By Category</Flex>
            <Grid justify='center' align='center' rowGap={['30px','60px','30px','']} templateColumns={['repeat(1,70%)','repeat(1,70%)','repeat(2,50%)','repeat(3,30%)']} justifyContent='space-evenly'  w='90%' margin='auto' mt={['100px','90px','50px','60px']}>
              {
                imageArray.map((item,index)=>(
                    <Grid key={index} placeItems='center' rowGap={5} _hover={{transition:'0.60s',transform:'scale(1.1)'}}>
                    <Image w='90%' src={item} />
                    <Text fontSize={20} fontWeight='500' fontFamily='sans-serif'>Supplements</Text>
                    <Text fontSize={15} color='RGB(163, 180, 155)'>See All SUpplements</Text>
                    </Grid>
                ))
              }
            </Grid>
         </Grid>
        </>
    )
}