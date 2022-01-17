import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import BannerContinent from "../../components/Banner/BannerContinent";
import CardsCountries from "../../components/Cards/CardsCountries";
import Header from "../../components/Header";
import InfoContinent from "../../components/InfoContinent";


export default function Continent({slug}){
  
  return(
    <Flex direction="column">

      <Header/>

      <BannerContinent 
        title="Europa"
        image="europe.jpg"
      />

      <InfoContinent 
        description="A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste"
        countries_number={50}
        languages_number={60}
        most_visited_cities_number={27}
      />
     
      <CardsCountries />
      
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths = () =>{
  return{
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps : GetStaticProps = async ({ params }) => {
  const { slug } = params;

  return {
    props: {
      slug
    }
  }
}