import { Box, Flex, Image, Text  } from "@chakra-ui/react";

interface TypesBoxProps {
  img: string;
  alt: string;
  title: string;
}

export function TypesItem({img, alt, title }: TypesBoxProps){
  return (
    <Box
      align={["flex-start","center"]}
      justify="center"
      direction="column"
    >
      <Image
        src={img}
        alt={alt} 
        w={["70px","85px"]}
        h={["70px","85px"]}
        mb={["4","6"]}
      />
      <Text
        fontSize={["18px","24px"]}
        fontWeight="600"
        color="feldgrau"
      >
        {title}
      </Text>
    </Box>
  );
}
