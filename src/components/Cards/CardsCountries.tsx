import { Flex, Grid, Heading } from "@chakra-ui/react";
import CardItem from "./CardItem";

interface CardsCountriesProps {
  countries: {
    imagecountrie: {
      url: string;
    }
    countrie_name: string;
    capital_name: string;
    flag_countrie: {
      url: string;
    }
  }[]
}

export default function CardsCountries({
  countries
} : CardsCountriesProps ){
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
            {
              countries.map(countrie => (
                <CardItem 
                  key={countrie.capital_name}
                  imageCountrie={countrie.imagecountrie.url}
                  countrie={countrie.countrie_name}
                  capital= {countrie.capital_name}
                  flag={countrie.flag_countrie.url}
                />
              ))
            }
              
          </Grid>
        </Flex>
      </Flex>
  )
} 