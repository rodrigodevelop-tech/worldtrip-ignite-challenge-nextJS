import { Flex, Heading, Text } from "@chakra-ui/react";

interface BannerContinent {
  title: string;
  image: string;
}

export default function BannerContinent( {title,image} : BannerContinent){
  
  return(
      <Flex
        bgImage={`url('../images/${image}')`}
        w="100%"
        h={["183px","500px"]}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="100% 30%"
        position="relative"
      >
        <Heading
          fontSize={["28px","48px"]}
          lineHeight={["42px","72px"]}
          fontWeight="600"
          color="cultured"
          position="absolute"
          bottom={["70px","50px"]}
          left={["175px","140px"]}
        >
          {title}
        </Heading>
      </Flex>
  )
}
