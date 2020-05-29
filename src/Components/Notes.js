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
import {imageConstants} from '../Config/constant';
import { useIsFocused } from '@react-navigation/native'
import {connect} from 'react-redux';
import {displayData} from '../Services/Notes/action';

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
    
  }
 

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
  Profile=()=>{
    const isFocused = useIsFocused()
    return <Text>{isFocused ?()=>{ this.setState({
      count:this.state.count+1
    })}:"hi"}</Text>
  }


  render() {
    console.log(
      'Data inside Notes App',
      this.props.data.response,
      this.groupTitle(),
    );
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
          <Text style={styles.textStyle}>
            My <Text style={styles.textStyle}>Notes</Text>
          </Text>
        </View>

        <View style={{marginLeft: 30, marginTop: 40}}>
          <View style={styles.titleView}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Content', {
                  content: this.groupTitle().Personal,
                  title: 'Personal',
                });
              }}>
              <Text style={styles.fontStyle}>Personal</Text>
              <this.Profile/>
            </TouchableOpacity>
            <View style={{marginRight: 30}}>
              {this.groupTitle() ? (
                <Text style={styles.fontStyle}>
                  {this.groupTitle().Personal.length}
                </Text>
              ) : (
                <Text>undefined</Text>
              )}
            </View>
          </View>

          <View style={styles.titleView}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Content', {
                  content: this.groupTitle().Work,
                  title: 'Work',
                });
              }}>
              <Text style={styles.fontStyle}>Work</Text>
            </TouchableOpacity>
            <View style={{marginRight: 30}}>
              {this.groupTitle() ? (
                <Text style={styles.fontStyle}>
                  {this.groupTitle().Work.length}
                </Text>
              ) : (
                <Text>undefined</Text>
              )}
            </View>
          </View>

          <View style={styles.titleView}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Content', {
                  content: this.groupTitle().Ideas,
                  title: 'Ideas',
                });
              }}>
              <Text style={styles.fontStyle}>Ideas</Text>
            </TouchableOpacity>
            <View style={{marginRight: 30}}>
              {this.groupTitle() ? (
                <Text style={styles.fontStyle}>
                  {this.groupTitle().Ideas.length}
                </Text>
              ) : (
                <Text>undefined</Text>
              )}
            </View>
          </View>

          <View style={styles.titleView}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Content', {
                  content: this.groupTitle().Lists,
                  title: 'Lists',
                });
              }}>
              <Text style={styles.fontStyle}>Lists</Text>
            </TouchableOpacity>
            <View style={{marginRight: 30}}>
              {this.groupTitle() ? (
                <Text style={styles.fontStyle}>
                  {this.groupTitle().Personal.length}
                </Text>
              ) : (
                <Text>undefined</Text>
              )}
            </View>
          </View>
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
    color: 'blue',
    fontSize: 60,
    fontWeight: '900',
  },
  titleView: {
    marginTop: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fontStyle: {color: 'blue', fontSize: 35, fontWeight: 'bold'},
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


