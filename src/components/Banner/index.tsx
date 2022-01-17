import { Box, Flex, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";


export default function Banner(){
  const isVisibleImage = useBreakpointValue({
    base: false,
    md: true
  });

  return(
    <Flex
      bgImage="url('images/banner.jpg')"
      w="100%"
      h={["183px","335px"]}
      mx="auto"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition={["100% 20%","100% 30%"]}
    >
      <Flex
        w="100%"
        mx="auto"
        justify="space-between"
        align={["flex-start","center"]}
        px={["4","36"]}
      >
        <Box
          mt={["30px","0px"]}
        >
          <Heading
            color="cultured"
            fontWeight="500"
            fontSize={["20px","4xl"]}
          >
            5 continentes,<br />infinitas possibilidades.
          </Heading>

          <Text
            color="gainsboro"
            mt="5"
            fontSize={["14px","xl"]}
            maxW="550px"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        { isVisibleImage && (
            <Image 
              src="images/Airplane.svg"
              alt="Avião"
              w="430px"
              display="block"
              ml="8"
              transform="translateY(55px)"
            />
          )
        }
      </Flex>
    </Flex>
  )
}