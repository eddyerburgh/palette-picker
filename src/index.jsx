/* eslint-disable no-shadow, import/no-extraneous-dependencies */
import 'babel-polyfill';
import React from 'react';
import reactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import store from './redux/store';
import Root from './containers/Root';

require('./style/style.scss');

const render = (Component) => {
  reactDOM.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
      document.getElementById('root')
    );
};

render(Root);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    render(Root);
  });
}
