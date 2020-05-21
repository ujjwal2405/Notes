import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

import {connect} from 'react-redux';

import {signupData} from '../Services/Signup/action'

class SignUp extends React.Component {
  constructor(props){
    super(props)
    this.state={
      email:'',
      username:'',
      password:'',
      phoneNumber:'',
      test:''
    }
  }

  // validateEmail = email => {
  //   var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(email);
  //   };

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
          <TextInput placeholder="Email Address" 
           onChangeText={txt => this.setState({email: txt})}

          />
        </View>

        <View style={styles.credentialView}>
          <TextInput placeholder="Username" 
          onChangeText={txt => this.setState({username: txt})}
          />
        </View>

        <View style={styles.passwordView}>
          <TextInput placeholder="Password" secureTextEntry={true} 
          onChangeText={txt => this.setState({password: txt})}
          />

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

        <View style={styles.credentialView}>
          <TextInput placeholder="Phone Number" 
          onChangeText={txt => this.setState({phoneNumber: txt})}
          />
        </View>



            <TouchableOpacity
             onPress={() => {
              this.props.signupList(
                this.state.email,
                this.state.username,
                this.state.password,
                this.state.phoneNumber
              )
            }}
            >
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

const mapStateToProps = state => ({
  // data:state.signupReducer.signupdata
});

const mapDispatchToProps = {
 signupList:signupData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);



   {/* <TextInput
style={{flex:1,height: 40}}
onChangeText={(test) => {
this.setState({test},()=>{
if (!this.validateEmail(this.state.test)) {
Alert.alert('Invalid email')
}
})
}}
/> */}