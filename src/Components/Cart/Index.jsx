import { Box, Button, Img } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Cart = () => {
  let history = useHistory();
  return (
    <Box>
      <Img
        _hover={{ cursor: 'pointer' }}
        onClick={() => history.push('/checkout')}
        maxH="50px"
        height="32px"
        width="auto"
        maxWidth="45px"
        src="https://img.icons8.com/ios/50/000000/shopping-cart.png"
      />
    </Box>
  );
};

export default Cart;
