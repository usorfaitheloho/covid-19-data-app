import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { countrieslistsReducer, initialState } from './reducer';
import { regionsReducer, regionsState } from './regionReducer';
import { headerReducer, headerState } from './headerReducer';

const rootReducer = combineReducers({
  countries: countrieslistsReducer,
  regions: regionsReducer,
  header: headerReducer,
});

const store = createStore((state, action) => rootReducer(state, action),
  { countries: initialState, regions: regionsState, header: headerState }, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;
