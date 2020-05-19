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
import Signup from './SignUp'
import Login from './Login'

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state={
      toggleLogin:true,
      loginText:"Login",
      signupText:"Signup"
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loginView}>
          <TouchableOpacity>
          <Text style={styles.loginText}>
           {this.state.toggleLogin?this.state.loginText:this.state.signupText}
          </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
          onPress={()=>{
              this.setState({
                  toggleLogin:false
              })
          }}
          >
          <Text style={styles.signupText}> 
          {this.state.toggleLogin?this.state.signupText:this.state.loginText}
          </Text>
          </TouchableOpacity>
        
     
        </View>

        {this.state.toggleLogin? <Login/> : <Signup/>}

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
  
});
export default Home;
