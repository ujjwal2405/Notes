const baseApiUrl = 'https://nodejsapp20.herokuapp.com/api';

const apiConfig = {
 
    loginUserApi: `${baseApiUrl}/authenticate/`,
    addUserApi: `${baseApiUrl}/users/`,

};

export default {
  apiConfig,
  baseApiUrl,
};


// const apiURL = 'https://nodejsapp20.herokuapp.com/api';

// const apiConfig = {
//   authenticationApi: {
//     loginUserApi: `${apiURL}/authenticate/`,
//   },
//   createApi: {
//     createUserApi: `${apiURL}/users/`,
//   },
// };

// export default {
//   apiConfig,
//   apiURL,
// };