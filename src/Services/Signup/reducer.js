import {SIGNUP_DATA} from './constant'

const initialState={
    signupdata:[],
  

    
 }

 const signupReducer = (state=initialState , action ={}) =>{
    switch(action.type){
        case SIGNUP_DATA:{
            return{...state, signupdata : action.data}
        }
        default:
            return state;
    }
}

export default signupReducer