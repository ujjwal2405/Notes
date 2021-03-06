import ADD_DATA from './constant'

import config from '../../Config/env';

let addDataApi=config.apiConfig.addDataApi

export const addData = (title,data,loginId) => dispatch => {
  console.log("fetch se pehle vaala",title,data,loginId)
    fetch(
      addDataApi+loginId,
      {
        method: 'PUT',
        headers: {Accept: 'application/json', 'content-type': 'application/json'},
        body: JSON.stringify({
            notes:[{
                title: title,
         data: data
     }]
 
          })
      },
    )
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
          console.log("Response of action of add data",responseJson)
        dispatch({
          type: ADD_DATA,
          data: responseJson,
        });
      });
  };