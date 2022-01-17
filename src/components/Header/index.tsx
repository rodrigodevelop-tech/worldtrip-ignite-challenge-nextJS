import { Flex, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiArrowLeftSLine } from 'react-icons/ri';


export default function Header(){
  const { asPath } = useRouter();
  const notHomePage = asPath !== '/';

  return(
    <Flex
      as="nav"
      w="100%"
      px="6"
      h={["50","75"]}
      align="center"
      justify="center"
      position="relative"
    >
      {
        notHomePage && (
          <Link href="/">
            <a>
              <Icon
                as={RiArrowLeftSLine}
                color="feldgrau"
                fontSize={[30]}
                justifySelf="start" 
                position="absolute"
                left={["4","140px"]}
                top={["2.5","6"]}
              />
            </a>
          </Link>
        )
      }
      <Image 
        src="../images/Logo.svg"
        alt="Logo"
        w={["91px","184px"]}
        h={["30px","46px"]}
      />
    </Flex>
  )
}