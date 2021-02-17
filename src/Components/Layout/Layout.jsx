import { VStack } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';

const Layout = ({ children }) => {
  return (
    <VStack height="100%">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </VStack>
  );
};

export default Layout;
