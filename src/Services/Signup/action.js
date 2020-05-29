import{SIGNUP_DATA} from './constant'

import config from '../../Config/env';

let signupApi=config.apiConfig.addUserApi

export const signupData = (email,username,password,phoneNumber,callback) => dispatch => {
   fetch(
      signupApi,
      {
        method: 'POST',
        headers: {Accept: 'application/json', 'content-type': 'application/json'},
        body: JSON.stringify({
            email:email,
            username:username,
            password:password,
            phoneNumber:phoneNumber
          })
      },
    )
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
          console.log("response of SIgnup data",responseJson)
          if (responseJson.status === false) {
            callback && callback(false, responseJson, null);
          } else {
            callback && callback(true, responseJson, null);
            console.log('true');
            dispatch({
              type: SIGNUP_DATA,
              data:responseJson,
            });
          }
      });
  };