import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Img,
  TableCaption,
  IconButton,
  Button,
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

import {
  selectCartItems,
  selectCarTotal,
} from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from '../../redux/cart/cart.actions';

const List = ({
  cartItems,
  Total,

  removeItem,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <Table w="80%" variant="simple">
      <TableCaption>Voici la liste des composants</TableCaption>
      <Thead>
        <Tr>
          <Th>Image</Th>
          <Th>Nom</Th>
          <Th isNumeric textAlign="left">
            Quantité
          </Th>
          <Th isNumeric>Prix</Th>
        </Tr>
      </Thead>
      <Tbody>
        {cartItems.map(item => {
          return (
            <Tr key={`${item?.id}-${item?.nom}`}>
              <Td>
                <Img
                  boxSize="100px"
                  src={item?.imageUrl}
                  alt={item?.nom}
                  title={item?.nom}
                />
              </Td>
              <Td>{item?.nom}</Td>
              <Td>{item?.quantity}</Td>
              <Td isNumeric>{item?.prix}</Td>
              <Td>
                <IconButton
                  onClick={() => increaseQuantity(item)}
                  colorScheme="blue"
                  icon={<AddIcon />}
                />
                &emsp;
                <Button
                  onClick={() => decreaseQuantity(item)}
                  colorScheme="red"
                >
                  -
                </Button>
              </Td>
              <Td>
                <IconButton
                  onClick={() => removeItem(item)}
                  icon={<DeleteIcon />}
                />
              </Td>
            </Tr>
          );
        })}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th></Th>
          <Th></Th>
          <Th fontWeight="900" fontSize="1.5em">
            Total
          </Th>
          <Th isNumeric fontWeight="900" color="red" fontSize="1.5em">
            {Total}$
          </Th>
        </Tr>
      </Tfoot>
    </Table>
  );
};

const mapStateToProps = state =>
  createStructuredSelector({
    cartItems: selectCartItems,
    Total: selectCarTotal,
  });

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  decreaseQuantity: item => dispatch(decreaseQuantity(item)),
  increaseQuantity: item => dispatch(increaseQuantity(item)),
});
List.propTypes = {
  cartItems: PropTypes.array.isRequired,
  Total: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
