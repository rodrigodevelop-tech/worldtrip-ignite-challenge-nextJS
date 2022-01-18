import { Heading } from '@chakra-ui/react';
import Head from 'next/head';
import Banner from '../components/Banner';
import ContinentsSlide from '../components/ContinentsSlide';
import Header from '../components/Header';
import LineDivision from '../components/LineDivision';
import TravelTypes from '../components/TravelTypes';

import { getPrismicClient } from '../services/prismic';
import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import { Continent } from '../types';

interface HomeProps {
  continents: Continent[];
}


export default function Home({ continents } : HomeProps) {


  return (
    <>
      <Head>
        <title>WorldTrip - Home</title>
      </Head>

      <Header />
      <Banner />
      <TravelTypes />
      <LineDivision />

      <Heading
        fontSize={["20px","36px"]}
        lineHeight={["30px","54px"]}
        fontWeight="500"
        color="feldgrau"
        textAlign="center"
        mb={["20px","52px"]}
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Heading>

      <ContinentsSlide continents={continents}/>

    </>
  )
}

export const getStaticProps : GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query<any>(
    [
      Prismic.predicates.at('document.type','continents')
    ],
  );

  // console.log(response.results)

  return {
    props: {
      continents: response.results
    }
  }

}