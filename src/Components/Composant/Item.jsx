import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { selectComposant } from '../../redux/composant/composant.selectors';
import { connect } from 'react-redux';
import { Heading, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import CardItem from '../Card/Item';
const Item = ({ composant }) => {
  return (
    <>
      {' '}
      <Heading>{composant?.nom}</Heading>
      <Text m="25px 0px">{composant?.description}</Text>
      <Wrap spacing={10} width="100%">
        {composant?.items.map(item => (
          <WrapItem key={`${item?.id}-${item.nom}`} w="250px" h="300px">
            <CardItem item={item} />
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  composant: selectComposant(ownProps.composantId)(state),
});
export default connect(mapStateToProps, null)(Item);

Item.propTypes = {
  composant: PropTypes.object,
};
