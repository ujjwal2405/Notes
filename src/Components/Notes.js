import React, {Component, PureComponent} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {imageConstants,colorConstants} from '../Config/constant';
import {useIsFocused} from '@react-navigation/native';
import {connect} from 'react-redux';
import {displayData} from '../Services/Notes/action';

import AsyncStorage from '@react-native-community/async-storage';

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      loading: false,
    };
  }

  componentDidMount() {
    console.log('I am cdm', this.props.loginId);
    this.props.displayDataList(this.props.loginId);

    try {
      AsyncStorage.setItem('token', this.props.loginId);

      // AsyncStorage.setItem('username', this.props.username);
    } catch {
      console.log('Failed to save the data to the storage');
    }
  }

  Logout = async () => {
    await AsyncStorage.clear();

    setTimeout(() => {
      this.setState({loader: false});
      this.props.navigation.navigate('Login');
      //alert('You have been Logged Out Successfully');
    }, 1000);
  };

  groupTitle = () => {
    if (!this.props.data.response) {
      () => {
        this.setState({
          loading: true,
        });
      };
    } else {
      var apiData = this.props.data.response;
      var result = apiData.reduce(function(r, a) {
        r[a.title] = r[a.title] || [];
        r[a.title].push(a);
        return r;
      }, Object.create(null));
      console.log('Grouped', result.Personal);
      return result;
    }
  };

  render() {
    console.log(
      'Data inside Notes App',
      this.props.data.response,
      this.groupTitle(),
    );
    const groupedArray = this.groupTitle();
    if (this.state.loading) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.hamburgerView}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.toggleDrawer();
            }}>
            <View style={styles.innerHamburgerView}>
              <Image
                source={imageConstants.hamburger}
                style={styles.hamburgerImage}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('AddData');
            }}>
            <View style={styles.plusImage}>
              <Image source={imageConstants.plus} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyleMy}>
            My <Text style={styles.textStyle}>Notes</Text>
          </Text>
        </View>

        <View style={styles.parentTitleView}>
          <View style={styles.titleView}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Content', {
                  content: groupedArray.Personal,
                  title: 'Personal',
                });
              }}>
              <Text style={styles.fontStyle}>Personal</Text>
              {/* <this.Profile/> */}
            </TouchableOpacity>
            <View style={styles.lengthView}>
              {groupedArray ? (
                <Text style={styles.fontStyle}>
                  {groupedArray.Personal.length}
                </Text>
              ) : (
                <Text />
              )}
            </View>
          </View>

          <View style={styles.titleView}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Content', {
                  content: groupedArray.Work,
                  title: 'Work',
                });
              }}>
              <Text style={styles.fontStyle}>Work</Text>
            </TouchableOpacity>
            <View style={styles.lengthView}>
              {groupedArray ? (
                <Text style={styles.fontStyle}>{groupedArray.Work.length}</Text>
              ) : (
                <Text />
              )}
            </View>
          </View>

          <View style={styles.titleView}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Content', {
                  content: groupedArray.Ideas,
                  title: 'Ideas',
                });
              }}>
              <Text style={styles.fontStyle}>Ideas</Text>
            </TouchableOpacity>
            <View style={styles.lengthView}>
              {groupedArray ? (
                <Text style={styles.fontStyle}>
                  {groupedArray.Ideas.length}
                </Text>
              ) : (
                <Text />
              )}
            </View>
          </View>

          <View style={styles.titleView}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Content', {
                  content: groupedArray.Lists,
                  title: 'Lists',
                });
              }}>
              <Text style={styles.fontStyle}>Lists</Text>
            </TouchableOpacity>
            <View style={styles.lengthView}>
              {groupedArray ? (
                <Text style={styles.fontStyle}>
                  {groupedArray.Lists.length}
                </Text>
              ) : (
                <Text />
              )}
            </View>
          </View>
        </View>

        <View
          style={styles.logoutImage}>
          <TouchableOpacity
            onPress={() => {
              this.Logout();
            }}>
            <Image source={imageConstants.logout} />
          </TouchableOpacity>
          <Text style={styles.logoutText}>Log Out</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorConstants.white,
  },
  hamburgerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerHamburgerView: {
    marginLeft: 20,
  },
  hamburgerImage: {
    height: 30,
    width: 30,
    marginTop:10
  },
  plusImage: {
    marginRight: 20,
  },
  textView: {
    justifyContent: 'center',
    marginTop: 30,
    alignItems: 'center',
  },
  textStyle: {
    color: colorConstants.navyBlue,
    fontSize: 60,
    fontWeight: '900',
  },
  textStyleMy: {
    color: colorConstants.red,
    fontSize: 60,
    fontWeight: '900',
  },
  titleView: {
    marginTop: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fontStyle: {
    color: colorConstants.navyBlue,
    fontSize: 35,
    fontWeight: 'bold',
  },
  lengthView: {marginRight: 30},
  parentTitleView: {marginLeft: 30, marginTop: 40},
  logoutImage:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 55,
  },
  logoutText:{
    marginTop:15,color:colorConstants.navyBlue,fontSize:25
  }
}); 

const mapStateToProps = state => ({
  loginId: state.loginReducer.loginId,
  data: state.displayReducer.displayData,
  loadingData: state.displayReducer.loadingData,
});

const mapDispatchToProps = {
  displayDataList: displayData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notes);
