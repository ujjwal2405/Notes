import {LOGIN_START,LOGIN_SUCCESS,LOGIN_FAIL, SESSION_ID} from './constant';

const initialState={
    loading:false,
    loginSuccess:false,
    loginId:''
}

const loginReducer = (state=initialState , action ={}) =>{
     
    switch(action.type){
        case LOGIN_START:{
            return {...state,loading:true}
        }
        case LOGIN_SUCCESS:{
            // console.log("Login id of reducer",action.data)
            return{...state,loginSuccess:true,loginId:action.data,loading:false}
        }
        case LOGIN_FAIL:{
            return{...state,loginSuccess:false}
        }

        case SESSION_ID:{
            return{...state,loginId:action.data}
        }

        default:
            return state;
    }
}

export default loginReducer