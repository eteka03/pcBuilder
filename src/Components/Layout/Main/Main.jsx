import { Box } from '@chakra-ui/react';
import React from 'react';

const Main = ({ children }) => {
  return (
    <Box width="100%" height="auto" flexGrow="1">
      {children}
    </Box>
  );
};

export default Main;
