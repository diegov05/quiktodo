import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ChakraProvider, ColorModeProvider, ColorModeScript } from '@chakra-ui/react';
import './index.css';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode >
);
