import {DELETE_DATA} from './constant'

const initialState={
    displayData:[] 
 }

 const deleteReducer = (state=initialState , action ={}) =>{
    switch(action.type){
        // case FETCH_DATA:{
        //     return{...state, loadingData:true}
        // }
        case DELETE_DATA:{
            return{...state, displayData : action.data}
        }
        default:
            return state;
    }
}

export default deleteReducer