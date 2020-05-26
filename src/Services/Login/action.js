import {LOGIN_FAIL,LOGIN_START,LOGIN_SUCCESS} from './constant';

import config from '../../Config/env';

let authenticateApi=config.apiConfig.loginUserApi




export const loginData = (username,password,callback) => dispatch =>{
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

if(responseJson.status==false){
    callback && callback(false, responseJson, null);
}else {
    callback && callback(true, responseJson, null);
    console.log(responseJson.id);
    dispatch({
      type: LOGIN_SUCCESS,
      data: responseJson.id,
    });
  }
});
};



