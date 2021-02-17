import { Center, Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Inconnu = () => {
  return (
    <Container maxW="xl" centerContent>
      <Heading mt={12} mb={12}>
        404 Page Non Trouvé{' '}
      </Heading>
      <Text>La page que vous essayez de consulter est inconnue.</Text>
      <Text>
        Revenir à{' '}
        <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>
          Acceuil
        </Link>
      </Text>
    </Container>
  );
};

export default Inconnu;
