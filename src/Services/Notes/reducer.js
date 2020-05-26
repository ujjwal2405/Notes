import {DISPLAY_DATA} from './constant'

const initialState={
    displayData:[],  
 }

 const displayReducer = (state=initialState , action ={}) =>{
    switch(action.type){
        case DISPLAY_DATA:{
            return{...state, displayData : action.data}
        }
        default:
            return state;
    }
}

export default displayReducer