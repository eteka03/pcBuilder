import React, { useEffect } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Layout from './Components/Layout/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Accueil from './Page/Accueil';
import Composant from './Page/Composant';
import Checkout from './Page/Checkout';
import Inconnu from './Page/Inconnu';
import { setComposants } from './redux/composant/composant.actions';
import { connect } from 'react-redux';
import { getComposants } from './services/getComposants';

function App({ initializeComposants }) {
  useEffect(() => {
    //stimulation de redux avec de fausse données
    initializeComposants(getComposants());
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Accueil} />
            <Route exact path="/composants" component={Accueil} />
            <Route exact path="/composants/:id" component={Composant} />
            <Route exact path="/checkout" component={Checkout} />
            <Route component={Inconnu} />
          </Switch>
        </Layout>
      </Router>
    </ChakraProvider>
  );
}

const mapDispatchToProps = dispatch => ({
  initializeComposants: composants => dispatch(setComposants(composants)),
});

export default connect(null, mapDispatchToProps)(App);
