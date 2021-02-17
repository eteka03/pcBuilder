import { Box, Button, IconButton, Img, Text } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Item = ({ item }) => {
  useEffect(() => {
    console.log(item);
  }, [item]);
  return (
    <Box h="320px" w="250px">
      <Img
        src={item?.imageUrl}
        alt={item?.nom}
        title={item?.nom}
        objectFit="cover"
        h="45%"
        w="100%"
      />
      <Box>
        <Text>{item?.nom}</Text>
        <Text>{item?.description}</Text>
        <Text fontWeight="900">{item?.prix} $</Text>
        <IconButton colorScheme="pink" icon={<AddIcon />} />
      </Box>
    </Box>
  );
};

Item.propTypes = {
  item: PropTypes.object,
};
export default Item;
