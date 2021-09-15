import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import App from './App';
import thunk from "redux-thunk"

import rootReducer from "./redux/reducers/rootReducer"

let myStore = createStore(rootReducer,applyMiddleware(thunk));


ReactDOM.render(
<Provider store={myStore}>
  <App />
</Provider>,
  document.getElementById('root')
);

