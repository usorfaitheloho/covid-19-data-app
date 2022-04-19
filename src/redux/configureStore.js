import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { countrieslistsReducer, initialState } from './reducer';

const store = createStore(countrieslistsReducer,
  initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
