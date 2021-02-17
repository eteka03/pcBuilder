import { HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import Cart from '../../../Cart/Index';
import Logo from '../../../Logo/Logo';

const NavBar = () => {
  return (
    <HStack height="100%" width="100%" justifyContent="space-between">
      <Logo height="100%" objectFit="cover" maxWidth="60px" maxH="45px" />
      <Cart />
    </HStack>
  );
};

export default NavBar;
