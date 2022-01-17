import { Box, Flex, Grid, GridItem  } from "@chakra-ui/react";
import { TypesItem } from "./TypeItem";

export default function TravelTypes(){
  return (
      <Grid
        templateColumns={["repeat(2, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)","repeat(3, 1fr)","repeat(3, 1fr)","repeat(5, 1fr)"]}
        mt={["16","32"]}
        mx={["4","16","140px"]}
        gap={["6","20"]}
        justifyContent="space-between"
        align="center"
      >
        <GridItem h="188px" w="145px">
          <TypesItem 
            img="/icons/cocktail.svg"
            alt="vida noturna"
            title="vida noturna"
          />
        </GridItem>
        <GridItem h="188px" w="145px">
          <TypesItem 
            img="/icons/surf.svg"
            alt="praia"
            title="praia"
          />
        </GridItem>
        <GridItem h="188px" w="145px">
          <TypesItem 
            img="/icons/building.svg"
            alt="moderno"
            title="moderno"
          />
        </GridItem >
        <GridItem h="188px" w="145px">
          <TypesItem 
            img="/icons/museum.svg"
            alt="clássico"
            title="clássico"
          />
        </GridItem>
        <GridItem h="188px" w="145px">
          <TypesItem 
            img="/icons/earth.svg"
            alt="e mais..."
            title="e mais..."
          />
        </GridItem>
      </Grid>
  );
}
