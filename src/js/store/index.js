import { createStore } from 'redux';
import rootReducer from "../reducers/index";



// You may also pass an initial state to createStore which is useful for server side 
// rendering but for now we’re not interested in that.

const store = createStore(rootReducer, {});

export  default store;