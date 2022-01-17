import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      '900' : '#181B23',
      '800' : "#1F2029",
      '700' : "#353646",
      '600' : "#4B4D63",
      '500' : "#616480",
      '400' : "#797D9A",
      '300' : "#9699B0",
      '200' : "#B3B5C6",
      '100' : "#D1D2DC",
      '50'  : "#EEEEF2",
    },
    yellow: {
      '700' : '#FFBA08',
      '650' : 'rgba(255, 186, 8,0.5)'
    },
    black: '#000000',
    white: '#FFFFFF',
    feldgrau: '#47585B',
    spanishGray: {
      '400' : '#999999',
      '350' : 'rgba(153, 153, 153, 0.5)'
    },
    cultured: '#F5F8FA',
    gainsboro: '#DADADA',
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: '#F5F8FA',
        color: '#F5F8FA',
      }
    }
  }
});