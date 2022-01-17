import { Box, Divider, Flex } from "@chakra-ui/react";


export default function LineDivision(){
  return(
    <Flex
      align="center"
      justify="center"
      mx="auto"
      my={["6","20"]}
    >
      <Box
        w="90px" 
        h="2px"
        bg="feldgrau"
      />
    </Flex>
  )
}