import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {connect} from 'react-redux';
import {loginData} from '../Services/Login/action';
import {imageConstants} from '../Config/constant';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      secure: true,
    };
  }

  Authenticate = () => {
    const {username, password} = this.state;
    const {success} = this.props;

    if (success && username && password) {
      this.props.props.navigation.navigate('Notes');
      return Alert.alert('Your Login is Successful');
    } else Alert.alert('Wrong Credentials');
  };

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

        <View style={styles.credentialView}>
          <TextInput
            placeholder="Username"
            onChangeText={txt => this.setState({username: txt})}
          />
        </View>

        <View style={styles.passwordView}>
          <View>
            <TextInput
              placeholder="Password"
              secureTextEntry={this.state.secure}
              onChangeText={txt => this.setState({password: txt})}
            />
          </View>

          <View>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  secure: !this.state.secure,
                });
              }}>
              <Image source={imageConstants.eye} style={{marginRight: 0}} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            this.props.loginList(this.state.username, this.state.password),
              this.Authenticate();
          }}>
          <View style={styles.logView}>
            <Image source={imageConstants.tick} />

            <Text
              style={{
                color: 'blue',
                marginLeft: 20,
              }}>
              LOG IN
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.loginwithView}>
          <Text style={styles.loginwithText}>Login with</Text>
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
  logView: {
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
  loginwithView: {
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginwithText: {
    color: 'grey',
  },
});

const mapStateToProps = state => ({
  // data:state.signupReducer.signupdata
  loading: state.loginReducer.loading,
  success: state.loginReducer.loginSuccess,
  fail: state.loginReducer.loginFail,
});

const mapDispatchToProps = {
  loginList: loginData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
