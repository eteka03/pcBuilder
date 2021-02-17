import { Box } from '@chakra-ui/react';
import React from 'react';
import CartList from '../Components/Cart/List';
const Checkout = () => {
  return (
    <Box width="100%" textAlign="center" m="25px 30px">
      <CartList />
    </Box>
  );
};

export default Checkout;
