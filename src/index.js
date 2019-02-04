import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import  { Provider } from 'react-redux';
import store from "./js/store/index";

ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>
, document.getElementById('root')
);

serviceWorker.unregister();

// import store from "./js/store/index";
// import addArticle from "./js/actions/index";

// window.store = store;
// window.addArticle = addArticle;

// console.log(store.getState());

// store.subscribe(() => console.log('Look ma, Redux!!'))


// store.dispatch(addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) )

// console.log(store.getState());

