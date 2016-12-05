/* eslint-disable no-shadow, import/no-extraneous-dependencies */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import store from './redux/store';
import Root from './containers/Root';

function renderWithHotReload(Root) {
  render(
    <AppContainer>
      <Root store={store} />
    </AppContainer>,
        document.getElementById('root')
    );
}

renderWithHotReload(Root);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const Root = require('./containers/Root').default; // eslint-disable-line
    renderWithHotReload(Root);
  });
}

