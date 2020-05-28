import{SIGNUP_DATA} from './constant'

import config from '../../Config/env';

let signupApi=config.apiConfig.addUserApi

export const socialData = (username,email,id) => dispatch => {
   fetch(
      signupApi,
      {
        method: 'POST',
        headers: {Accept: 'application/json', 'content-type': 'application/json'},
        body: JSON.stringify({
            username:username,
            password:'',
            email:email,
            socialId:id
          })
      },
    )
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
          console.log("response of S0cial login data",responseJson)
        dispatch({
          type: SIGNUP_DATA,
          data: responseJson,
        });
      });
  };