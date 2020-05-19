import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class SignUp extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
     

        <View style={styles.profilePicture}>
          <Image
            source={require('../Assets/Default.png')}
            style={{
              height: 100,
              width: 100,
              borderRadius: 70,
            }}
          />
        </View>

        <View style={styles.credentialView}>
          <TextInput placeholder="Email Address" />
        </View>

        <View style={styles.credentialView}>
          <TextInput placeholder="Username" />
        </View>

        <View style={styles.passwordView}>
          <TextInput placeholder="Password" secureTextEntry={true} />

          <TouchableOpacity>
            <Image source={require('../Assets/eye.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.passwordView}>
          <TextInput placeholder="Repeat Password" secureTextEntry={true} />

          <TouchableOpacity>
            <Image source={require('../Assets/eye.png')} />
          </TouchableOpacity>
        </View>

            <TouchableOpacity>
        <View
          style={styles.logView}>
          <Image source={require('../Assets/tick.png')} />

          <Text
            style={{
              color: 'blue',
              marginLeft: 20,
            }}>
           SIGN UP
          </Text>
        </View>
        </TouchableOpacity> 
            <View style={styles.loginwithView}>
                <Text style={styles.loginwithText}>
                   Terms of Service
                </Text>
            </View>

      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  loginView: {
    marginTop: 40,
    marginLeft: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loginText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  signupText: {
    marginRight: 40,
    color: 'grey',
    fontSize: 20,
    marginTop: 5,
  },
  profilePicture: {
    marginTop: 50,

    justifyContent: 'center',
    alignItems: 'center',
  },
  credentialView: {
    marginTop: 30,
    marginHorizontal: 50,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    padding: 10,
  },
  passwordView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginHorizontal: 50,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    padding: 10,
  },
  logView:{
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: 'white',
    marginTop: 20,
    marginHorizontal: 30,
  },
  loginwithView:{
      marginTop:70,
      justifyContent:"center",
      alignItems:"center"
  },
  loginwithText:{
      color:"grey"
  }
});
export default SignUp;
