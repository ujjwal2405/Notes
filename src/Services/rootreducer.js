import {createStore,combineReducers,applyMiddleware} from 'redux';

import signupReducer from './Signup/reducer'
import loginReducer from './Login/reducer'
import addReducer from './AddData/reducer'

import thunk from 'redux-thunk';

const reducer=combineReducers({signupReducer,loginReducer,addReducer})

const store = createStore(reducer,applyMiddleware(thunk));

export default store;