import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Signup from './SignUp'
import Login from './Login'

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state={
      toggleRender:true,
      loginText:"Login",
      signupText:"Sign Up"
    }
  }
  render() {
      console.log("Props of home screen",this.props)
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loginView}>
          <TouchableOpacity>
          <Text style={styles.loginText}>
           {this.state.toggleRender?this.state.loginText:this.state.signupText}
          </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
          onPress={()=>{
              this.setState({
                  toggleRender:!this.state.toggleRender
              })
          }}
          >
          <Text style={styles.signupText}> 
          {this.state.toggleRender?this.state.signupText:this.state.loginText}
          </Text>
          </TouchableOpacity>
        
     
        </View>

        {this.state.toggleRender? <Login props={this.props}/> : <Signup propss={this.props}/>}

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
