import {LOGIN_FAIL,LOGIN_START,LOGIN_SUCCESS} from './constant';

import config from '../../Config/env';

let authenticateApi=config.apiConfig.loginUserApi




export const loginData = (username,password) => dispatch =>{
     dispatch({
        type:LOGIN_START
    })
    fetch(authenticateApi,
    {
      method: 'POST',
      headers: {Accept: 'application/json', 'content-type': 'application/json'},
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    },
  ).
  then(response => {
      return response.json()
})
.then(responseJson=>{

    console.log("Response of responseJson",responseJson,responseJson.id,responseJson.status)

if(responseJson.status==true){
    dispatch({
        type:LOGIN_SUCCESS,
        data:responseJson.id
    })
}else{
    dispatch({
        type:LOGIN_FAIL
    })
}

})}



