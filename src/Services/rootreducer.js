import {createStore,combineReducers,applyMiddleware} from 'redux';

import signupReducer from './Signup/reducer'
import loginReducer from './Login/reducer'

import thunk from 'redux-thunk';

const reducer=combineReducers({signupReducer,loginReducer})

const store = createStore(reducer,applyMiddleware(thunk));

export default store;