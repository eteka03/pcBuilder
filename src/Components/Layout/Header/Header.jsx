import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import Logo from '../../Logo/Logo';
import NavBar from './NavBar/NavBar';

const Header = () => {
  return (
    <Box
      bgColor="#fff000"
      pos="relative"
      height="auto"
      top="0"
      left="0"
      padding="10px 40px"
      w="100%"
      h="100%"
      maxH="70px"
      display="flex"
      flexDirection="row"
    >
      <NavBar />
    </Box>
  );
};

export default Header;
