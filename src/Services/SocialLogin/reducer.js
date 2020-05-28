import {SIGNUP_DATA} from './constant'

const initialState={
    socialData:[],
  

    
 }

 const socialReducer = (state=initialState , action ={}) =>{
    switch(action.type){
        case SIGNUP_DATA:{
            return{...state, socialData : action.data}
        }
        default:
            return state;
    }
}

export default socialReducer