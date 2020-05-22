import {LOGIN_START,LOGIN_SUCCESS,LOGIN_FAIL} from './constant';

const initialState={
    loading:false,
    loginSuccess:true,
    loginId:''
}

const loginReducer = (state=initialState , action ={}) =>{
     
    switch(action.type){
        case LOGIN_START:{
            return {...state,loading:true}
        }
        case LOGIN_SUCCESS:{
            // console.log("Login id of reducer",action.data)
            return{...state,loginSuccess:true,loginId:action.data}
        }
        case LOGIN_FAIL:{
            return{...state,loginSuccess:false}
        }
        default:
            return state;
    }
}

export default loginReducer