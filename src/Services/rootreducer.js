import {createStore,combineReducers,applyMiddleware} from 'redux';

import signupReducer from './Signup/reducer'

import thunk from 'redux-thunk';

const reducer=combineReducers({signupReducer})

const store = createStore(reducer,applyMiddleware(thunk));

export default store;