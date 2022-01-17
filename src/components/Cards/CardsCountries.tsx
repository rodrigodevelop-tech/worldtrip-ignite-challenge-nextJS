import { Flex, Grid, GridItem, Heading, Text} from "@chakra-ui/react";
import CardItem from "./CardItem";


export default function CardsCountries(){
  return(  
      <Flex 
        align={["center","flex-start" ]}
        mx={["4","16","140px"]} 
        direction="column" 
        mb="12"
      >

        <Heading
          fontWeight="500"
          fontSize="36px"
          lineHeight="54px"
          color="feldgrau"
          mb="45px"
        >
          Cidades +100
        </Heading>
        <Flex>
          <Grid 
            templateColumns={{
              base:"repeat(1, 1fr)",
              md:"repeat(2, 1fr)",
              lg:"repeat(3, 1fr)",
              xl:"repeat(4, 1fr)",
            }} 
            gap={70}
          >
            <CardItem 
              imageCountries="europe.jpg" 
              countrie="Londres" 
              capital= "Reino Unido"
              flag="flagUK.png"
            />
            <CardItem 
              imageCountries="europe.jpg" 
              countrie="Londres" 
              capital= "Reino Unido"
              flag="flagUK.png"
            />
            <CardItem 
              imageCountries="europe.jpg" 
              countrie="Londres" 
              capital= "Reino Unido"
              flag="flagUK.png"
            />
            <CardItem 
              imageCountries="europe.jpg" 
              countrie="Londres" 
              capital= "Reino Unido"
              flag="flagUK.png"
            />
            <CardItem 
              imageCountries="europe.jpg" 
              countrie="Londres" 
              capital= "Reino Unido"
              flag="flagUK.png"
            />
            
          </Grid>
        </Flex>
      </Flex>
  )
} 