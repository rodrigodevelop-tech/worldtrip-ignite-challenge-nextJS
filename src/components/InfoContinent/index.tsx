import { 
  Box, 
  Flex, 
  Grid, 
  Heading, 
  Icon, 
  Text, 
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor, 
  Button
} from "@chakra-ui/react";
import { FiInfo } from 'react-icons/fi';

interface InfoContinentProps {
  description: string;
  countries_number: string;
  languages_number: string;
  most_visited_cities_number: string;
}

export default function InfoContinent({
  description,
  countries_number,
  languages_number,
  most_visited_cities_number
} : InfoContinentProps){
  
  return(
     <Box as="main" mx={["4","16","140px"]} >
        <Grid 
          templateColumns={{
            base:"repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          gap={70} 
          mt="20" 
          mb="20"
        >
          <Text
            color="feldgrau"
            fontSize="24px"
            fontWeight="400"
            lineHeight="36px"
            align="justify"
          >
            {description}
          </Text>

            <Grid templateColumns="repeat(3,1fr)" align="center" mt="40px">
              <Flex direction="column" position="relative">
                <Heading 
                  color="yellow.700"
                  fontSize="48px"
                  fontWeight="600"
                  lineHeight="72px"
                  textAlign="left"
                >
                  {countries_number}
                </Heading>
                <Text
                  color="feldgrau"
                  fontSize="24px"
                  fontWeight={["400","600"]}
                  lineHeight="36px"
                  textAlign="left"
                >
                 países   
                </Text>
              </Flex>
              <Flex direction="column">
                <Heading 
                  color="yellow.700"
                  fontSize="48px"
                  fontWeight="600"
                  lineHeight="72px"
                  textAlign="left"
                >
                  {languages_number}
                </Heading>
                <Text
                  color="feldgrau"
                  fontSize="24px"
                  fontWeight={["400","600"]}
                  lineHeight="36px"
                  textAlign="left"
                >
                 línguas   
                </Text>
              </Flex>

              <Flex direction="column">
                <Heading 
                  color="yellow.700"
                  fontSize="48px"
                  fontWeight="600"
                  lineHeight="72px"
                  textAlign="left"
                >
                  {most_visited_cities_number}   
                </Heading>

                <Flex
                  direction="row"
                  align="center"
                  justify="start"
                  w={["10px","250px"]}
                >
                  <Text
                    color="feldgrau"
                    fontSize="24px"
                    fontWeight={["400","600"]}
                    lineHeight="36px"
                    textAlign="left"
                  >
                  cidades +100   
                  </Text>

                  <Popover  placement='left'>
                    <PopoverTrigger>
                      <Button align="left" bgColor="cultured" _hover={{color:"cultured"}} _active={{color: 'cultured'}} h="16px" w="5px">
                        <Icon as={FiInfo} color="spanishGray.400" cursor="pointer"/>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent color="gray.100">
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader color="feldgrau">Informação</PopoverHeader>
                      <PopoverBody color="feldgrau">Esse continente possui {most_visited_cities_number} cidades das 100 mais visitadas do mundo</PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Flex>
                
              </Flex>
            
            </Grid>
        </Grid>
      </Box>
  )
}

