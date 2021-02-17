import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import Layout from './Components/Layout/Layout';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <h1>bonjour !!</h1>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
