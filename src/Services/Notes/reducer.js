import {DISPLAY_DATA,FETCH_DATA} from './constant'

const initialState={
    displayData:[],
    loadingData:false  
 }

 const displayReducer = (state=initialState , action ={}) =>{
    switch(action.type){
        case FETCH_DATA:{
            return{...state, loadingData:true}
        }
        case DISPLAY_DATA:{
            return{...state, displayData : action.data}
        }
        default:
            return state;
    }
}

export default displayReducer