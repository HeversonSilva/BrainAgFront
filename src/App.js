import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import store from './store';
import history from './services/history';

import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </Router>
      </Provider>
    </>
  );
}

export default App;
