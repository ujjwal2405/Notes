import {ADD_DATA} from './constant'

const initialState={
    adddata:[],
  

    
 }

 const addReducer = (state=initialState , action ={}) =>{
    switch(action.type){
        case ADD_DATA:{
            return{...state, adddata : action.data}
        }
        default:
            return state;
    }
}

export default addReducer