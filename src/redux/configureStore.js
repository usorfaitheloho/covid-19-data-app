import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { countrieslistsReducer, initialState } from './reducer';
import { regionsReducer, regionsState } from './regionReducer';

const rootReducer = combineReducers({
    countries: countrieslistsReducer,
    regions: regionsReducer,
});

const store = createStore((state,action) => rootReducer(state,action),
{ countries:initialState, regions:regionsState}, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;
