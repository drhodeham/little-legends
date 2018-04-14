import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import store, { history } from './store';
import App from './pages/App';

const target = document.querySelector('#root');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route exact path="/" component={App} />
    </ConnectedRouter>
  </Provider>,
  target
)
