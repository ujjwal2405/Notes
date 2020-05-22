const baseApiUrl = 'https://nodejsapp20.herokuapp.com/api';

const apiConfig = {
 
    loginUserApi: `${baseApiUrl}/authenticate/`,
    addUserApi: `${baseApiUrl}/users/`,
    addDataApi:`${baseApiUrl}/notes/`

};

export default {
  apiConfig,
  baseApiUrl,
};


