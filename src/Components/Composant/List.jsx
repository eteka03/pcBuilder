import { Box, Button, Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectComposants } from '../../redux/composant/composant.selectors';
import { AddIcon } from '@chakra-ui/icons';
import { useHistory } from 'react-router-dom';
const List = ({ composants }) => {
  const history = useHistory();

  return composants?.map(composant => (
    <Box
      h="70px"
      m="10px 10px"
      width="80%"
      p="10px"
      textAlign="center"
      border="1px solid #000000"
      display="flex"
      justifyContent="space-between"
      key={`${composant?.id}-${composant?.nom}`}
    >
      <Heading fontSize="1.7em">{composant?.nom}</Heading>
      <Button
        onClick={() => history.push(`composants/${composant?.id}`)}
        size="sm"
        leftIcon={<AddIcon />}
        colorScheme="pink"
      >
        Ajouter
      </Button>
    </Box>
  ));
};

const mapDispatchToProps = createStructuredSelector({
  composants: selectComposants,
});

export default connect(mapDispatchToProps, null)(List);

List.propTypes = {
  composants: PropTypes.array,
};
