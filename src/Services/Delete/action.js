import {DELETE_DATA} from './constant'
import config from '../../Config/env';

let signupApi=config.apiConfig.addUserApi


export const deleteData = (loginId,noteId) => dispatch => {
    console.log("ACtion of Delete",loginId)
//     dispatch({
//       type:FETCH_DATA
//   })
    fetch(
        signupApi+loginId+'/'+noteId,
      {
        method: 'DELETE',
        headers: {Accept: 'application/json', 'content-type': 'application/json'},
      },
    )
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
          console.log("Response of action of display data",responseJson)
        dispatch({
          type: DELETE_DATA,
          data: responseJson,
        });
      });
  };