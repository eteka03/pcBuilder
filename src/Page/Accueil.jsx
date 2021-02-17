import { Center, Container } from '@chakra-ui/react';
import React from 'react';
import ComposantList from '../Components/Composant/List';

const Accueil = () => {
  return (
    <Container centerContent>
      <ComposantList />
    </Container>
  );
};

export default Accueil;
