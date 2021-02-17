import { Box, Button, IconButton, Img, Text } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { addItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const Item = ({ item, addItem }) => {
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
        <IconButton
          onClick={() => addItem(item)}
          colorScheme="pink"
          icon={<AddIcon />}
        />
      </Box>
    </Box>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(Item);
Item.propTypes = {
  item: PropTypes.object,
};
