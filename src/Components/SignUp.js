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
import {imageConstants} from '../Config/constant';
import {signupData} from '../Services/Signup/action'

class SignUp extends React.Component {
  constructor(props){
    super(props)
    this.state={
      email:'',
      username:'',
      password:'',
      phoneNumber:'',
      test:'',
      secure:true,
      secureRepeat:true,
      usernameValidation:true,
      passwordValidation:true,
      emailValidation:true
    }
  }

  validateCreds(text, type) {
    var userNameRegex = /^\S{4,}$/;
    var passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (type === 'username') {
      if (userNameRegex.test(text)) {
        this.setState({usernameValidation: true});
        this.setState({username: text});
      } else {
        this.setState({usernameValidation: false});
      }
    } else if (type === 'password') {
      if (passwordRegex.test(text)) {
        this.setState({passwordValidation: true});
        this.setState({password: text});
      } else {
        this.setState({passwordValidation: false});
      }
    } else if (type === 'email') {
      if (emailRegex.test(text)) {
        this.setState({emailValidation: true});
        this.setState({email: text});
      } else {
        this.setState({emailValidation: false});
      }
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
     

        <View style={styles.profilePicture}>
          <Image
            source={imageConstants.profile}
            style={{
              height: 100,
              width: 100,
              borderRadius: 70,
            }}
          />
        </View>

        <View style={[styles.credentialView,{borderBottomColor:this.state.emailValidation?"grey":"red"}]}>
          <TextInput placeholder="Email Address" 
           onChangeText={txt => this.validateCreds(txt,'email')}

          />
        </View>

        <View style={[styles.credentialView,{borderBottomColor:this.state.usernameValidation?"grey":"red"}]}>
          <TextInput placeholder="Username" 
          onChangeText={txt => this.validateCreds(txt,'username')}
          />
        </View>

        <View style={[styles.passwordView,{borderBottomColor:this.state.passwordValidation?"grey":"red"}]}>
          <TextInput placeholder="Password" secureTextEntry={this.state.secure} 
          onChangeText={txt => this.validateCreds(txt,'password')}
          style={{width:"100%"}}
          />

          <TouchableOpacity
           onPress={()=>{
            this.setState({
              secure:!this.state.secure
            })
          }}
          >
            <Image source={imageConstants.eye} />
          </TouchableOpacity>
        </View>

        <View style={styles.passwordView}>
          <TextInput placeholder="Repeat Password" secureTextEntry={this.state.secureRepeat} style={{width:"100%"}} />

          <TouchableOpacity
          onPress={()=>{
            this.setState({
              secureRepeat:!this.state.secureRepeat
            })
          }}
          >
            <Image source={imageConstants.eye} />
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
                this.state.phoneNumber,
                (status)=>{
                  if (status) {
                   Alert.alert("Signup Successful","Move to login Screen")
                  } else {
                    Alert.alert('Error', 'Wrong Login Credentials');
                  }
                }
              )
            }}
            >
        <View
          style={styles.logView}>
          <Image source={imageConstants.tick} />

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