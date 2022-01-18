import { Box, Flex, Heading, Image, Text, Link as ChakraLink, Button } from "@chakra-ui/react";
import Link, { LinkProps } from "next/link";

interface ContinentImg {
  image?: string;
  title: string;
  subtitle: string;
  slug: string;
}


export default function ContinentImg({ image, title, subtitle, slug } : ContinentImg){
  
  return(
    <Link href={`/continent/${slug}`} passHref>
      <Flex
        as="a"
        w="100%"
        h="100%"
        align="center"
        justify="center"
        direction="column"
        bgPosition="100% 30%"
        bgRepeat="no-repeat"
        bgSize="cover"
        textAlign="center"
      >
        {
          image &&
          (
            <Image 
            src={image}
            filter="brightness(0.7)"
            />
          )
        }
        <Box
          pos="absolute"
        >
            <Heading
              fontSize={["24px","48px"]}
              fontWeight="700"
              lineHeight={["36px","72px"]}
            >
              {title}
            </Heading>
            <Text
              fontSize={["14px","24px"]}
              fontWeight="700"
              lineHeight={["21px","36px"]}
            >
              {subtitle}
            </Text>
        </Box> 
      </Flex>
    </Link>
  )
}