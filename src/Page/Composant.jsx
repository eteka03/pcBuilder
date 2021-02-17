import { Container, Box } from '@chakra-ui/react';
import React from 'react';
import { connect } from 'react-redux';
import ComposantItem from '../Components/Composant/Item';
import { selectComposant } from '../redux/composant/composant.selectors';

const Composant = ({
  match: {
    params: { id },
  },
}) => {
  return (
    <Box margin="25px 50px" w="100%">
      <ComposantItem composantId={id} />
    </Box>
  );
};

export default Composant;
