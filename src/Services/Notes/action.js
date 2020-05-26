import {DISPLAY_DATA} from './constant'

import config from '../../Config/env';
    
let addDataApi=config.apiConfig.addDataApi

export const displayData = (loginId) => dispatch => {
    console.log("Login Id in action of notes",loginId)
    fetch(
      addDataApi+loginId,
      {
        method: 'GET',
        headers: {Accept: 'application/json', 'content-type': 'application/json'},
      },
    )
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
          console.log("Response of action of display data",responseJson)
        dispatch({
          type: DISPLAY_DATA,
          data: responseJson,
        });
      });
  };