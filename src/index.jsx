import React from 'react';
import config from './config';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from './helpers';
import {createClient, Provider as GraphProvider} from 'urql';
import App from './App';
import * as serviceWorker from './serviceWorker';

const client = createClient({url: config.subgraph});

const store = configureStore();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GraphProvider value={client}>
        <App />
      </GraphProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
