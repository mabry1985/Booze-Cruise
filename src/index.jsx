import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './style.scss';
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

const root = document.getElementById('root');

const render = (Component) => {
  ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
      <Component />
    </Provider>
    </BrowserRouter>,
    root,
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => { render(App); });
}
