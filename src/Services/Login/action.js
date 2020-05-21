import {TOGGLE_FLAG,LOGIN_FAIL,LOGIN_START,LOGIN_SUCCESS} from './constant'





export const loginData = (username,password) => dispatch =>{
     dispatch({
        type:LOGIN_START
    })
    fetch('https://nodejsapp20.herokuapp.com/api/authenticate',
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

    console.log("Response of responseJson",responseJson)

if(responseJson.status==true){
    dispatch({
        type:LOGIN_SUCCESS
    })
}else{
    dispatch({
        type:LOGIN_FAIL
    })
}

})}



