import { Img } from '@chakra-ui/react';
import React from 'react';

const Logo = props => {
  return (
    <Img
      {...props}
      src="https://img.icons8.com/nolan/64/tom-clancy-division-2.png"
      alt="logo"
      title="logo"
    />
  );
};

export default Logo;
