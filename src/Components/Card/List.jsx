import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import CardItem from '../Composant/Item';
import { Wrap, WrapItem } from '@chakra-ui/react';

const List = ({ items }) => {
  const render = useCallback(() => {
    return (
      <Wrap width="100%">
        {items &&
          items.map(item => (
            <WrapItem key={`${item?.id}-${item.nom}`} w="250px" h="300px">
              <CardItem item={item} />
            </WrapItem>
          ))}
      </Wrap>
    );
  }, [items]);

  return render();
};

List.propTypes = {
  items: PropTypes.array,
};
List.defaultProps = {
  items: [],
};

export default List;
