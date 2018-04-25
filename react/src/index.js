import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import store, { history } from './store';
import App from './pages/App';
import EncounterEdit from './pages/EncounterEdit';

const target = document.querySelector('#root');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/edit/encounter" component={EncounterEdit} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  target
)
