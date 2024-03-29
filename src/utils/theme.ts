import { extendTheme } from '@chakra-ui/react';
import Color from 'color';
import { use100vh } from 'react-div-100vh';

export const theme = extendTheme({
  colors: {
    bg: 'rgb(250, 251, 252)',
    primary: {
      100: Color('#101D2C').lighten(6).hex(),
      200: Color('#101D2C').lighten(5).hex(),
      300: Color('#101D2C').lighten(4).hex(),
      400: Color('#101D2C').lighten(3).hex(),
      50: Color('#101D2C').lighten(7).hex(),
      500: Color('#101D2C').lighten(2).hex(),
      600: Color('#101D2C').lighten(1).hex(),
      700: '#101D2C',
      800: Color('#101D2C').darken(0.1).hex(),
      900: Color('#101D2C').darken(0.2).hex(),
    },
  },
});

export const useGlobalCSS = () => {
  const height = use100vh();

  return `
    scroll-behavior: smooth;

    a {
      text-decoration: none !important;
    }

    .fc .fc-button-primary {
      background: #101D2C;
    }

    .fc .fc-button-primary:not(:disabled):active:focus, .fc .fc-button-primary:not(:disabled).fc-button-active:focus {
      box-shadow: none;
      background: ${Color('#101D2C').lighten(1).hex()};
    }

    .fc-toolbar {
      color: #101D2C;
      font-weight: 600;
      text-transform: capitalize;
    }

    .fc .fc-scrollgrid-liquid {
      background: white;
      border-radius: 4px;
    }

    .fc {
      font-size: 14px;
    }

    .chakra-modal__content-container {
      height: auto !important;
      z-index: 20000 !important;
    }

    .chakra-modal__content {
      height: ${height || 0}px !important;
      margin-bottom: 0 !important;
      margin-top: 0 !important;
      max-width: 100vw !important;
    }

    .chakra-modal__overlay {
      z-index: 10000 !important;
    }

    @media (min-width: 768px) {
      .chakra-modal__content-container {
        height: 100vh !important;
      }

      .chakra-modal__content {
        height: auto !important;
        margin-bottom: 4rem !important;
        margin-top: 4rem !important;
        max-width: 36rem !important;
      }
    }

    :root {
      --toastify-color-error: #9B2C2C;
      --toastify-z-index: 999999;
    }
  `;
};
