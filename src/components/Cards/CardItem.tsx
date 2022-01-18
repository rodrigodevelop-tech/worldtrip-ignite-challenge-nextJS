import { Box, GridItem, Image,Text } from "@chakra-ui/react";

interface CardItemProps {
  imageCountrie: string;
  flag: string;
  countrie: string;
  capital: string;
}

export default function CardItem( { imageCountrie, flag, countrie, capital } : CardItemProps){
  return(
    <GridItem w="256px" h="279px" bg="white">
      <Box
        maxW="sm"
        w="256px" 
        h="279px"
      >
        <Box h="173px" maxW='256px' overflow='hidden'>
          <Image src={imageCountrie} objectFit="cover" minH="173px" borderTopRadius={4}/>
        </Box>

        <Box 
          p='6'
          h="106px"
          borderBottomRadius={4}
          borderWidth="1px"
          borderTopWidth="0px"
          borderColor="yellow.650"
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Text
              fontWeight="600"
              fontSize="20px"
              lineHeight="25px"
              color="feldgrau"
            >
              {countrie}
            </Text>
            <Text
              fontWeight="500"
              fontSize="16px"
              lineHeight="26px"
              color="spanishGray.400"
            >
              {capital}
            </Text>
          </Box>
          <Box>
           <Image src={flag} w="30px" h="30px" borderRadius='full'/>
          </Box>
        </Box>
      </Box>
    </GridItem>
  )
}