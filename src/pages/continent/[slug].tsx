import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import BannerContinent from "../../components/Banner/BannerContinent";
import CardsCountries from "../../components/Cards/CardsCountries";
import Header from "../../components/Header";
import InfoContinent from "../../components/InfoContinent";
import { getPrismicClient } from "../../services/prismic";

interface ContinentProps {
  continent: {
    id: string;
    slugs: string;
    data: {
      title: string;
      subtitle: string;
      description: string;
      image: {
        url: string;
      };
      languages_number: string;
      most_visited_cities_number: string;
      countries_number: string;
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
  }
}

export default function Continent({ continent } : ContinentProps){
  
  return(
    <Flex direction="column">

      <Header/>

      <BannerContinent 
        title={continent.data.title}
        image={continent.data.image.url}
      />

      <InfoContinent 
        description={continent.data.description}
        countries_number={continent.data.countries_number}
        languages_number={continent.data.languages_number}
        most_visited_cities_number={continent.data.most_visited_cities_number}
      />
     
      <CardsCountries countries={continent.data.countries}/>
      
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

  const prismic = getPrismicClient();

  const response = await prismic.getByUID<any>('continents',String(slug),{});

  return {
    props: {
      continent: response
    }
  }
}