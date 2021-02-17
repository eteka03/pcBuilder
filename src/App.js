import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Layout from './Components/Layout/Layout';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Accueil from './Page/Accueil';
import Composant from './Page/Composant';
import Checkout from './Page/Checkout';
import Inconnu from './Page/Inconnu';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Accueil} />
            <Route exact path="/composants" component={Accueil} />
            <Route exact path="/composants/:id" component={Composant} />
            <Route exact path="/checkout" component={Checkout} />
            <Route component={Inconnu} />
          </Switch>
        </Router>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
