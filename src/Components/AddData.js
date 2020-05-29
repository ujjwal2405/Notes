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
import {addData} from '../Services/AddData/action';

class AddData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      data: '',
      message: '',
      count: false,
    };
  }

  render() {
    const {title, data} = this.state;
    const {loginId} = this.props;

    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'blue'}}>
            Select a title
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            padding: 25,
            justifyContent: 'space-evenly',
          }}>
          <View style={styles.titleButtonView}>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  title: 'Personal',
                });
              }}>
              <View>
                <Text style={styles.titleName}>Personal</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.titleButtonView}>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  title: 'Work',
                });
              }}>
              <View>
                <Text style={styles.titleName}>Work</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.titleButtonView}>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  title: 'Ideas',
                });
              }}>
              <View>
                <Text style={styles.titleName}>Ideas</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.titleButtonView}>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  title: 'Lists',
                });
              }}>
              <View>
                <Text style={styles.titleName}>Lists</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginLeft: 40}}>
          <Text>
            <Text style={{fontSize: 20, color: 'red'}}>Title :</Text>{' '}
            <Text style={{fontSize: 20, color: 'red', fontWeight: 'bold'}}>
              {this.state.title}
            </Text>
          </Text>
        </View>
        <View style={{marginTop: 10}}>
          <TextInput
            placeholder="Add your Data"
            style={{
              marginHorizontal: 40,
              padding: 15,
              borderWidth: 1,
              borderColor: 'black',
              marginTop: 20,
              color: 'red',
            }}
            onChangeText={txt => this.setState({data: txt})}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            this.props.addDataList(title, data, loginId),
              this.setState({
                message: 'Data Added',
              });
          }}>
          <View
            style={{
              backgroundColor: 'black',
              padding: 20,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 25,
              marginHorizontal: 70,
            }}>
            <Text style={{color: 'white'}}>Add Data</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 25,
            marginHorizontal: 70,
          }}>
          <Text style={{color: 'red'}}>{this.state.message}</Text>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  titleButtonView: {backgroundColor: 'black', padding: 15, borderRadius: 10},
  titleName: {color: 'white'},
});

const mapStateToProps = state => ({
  loginId: state.loginReducer.loginId,
});

const mapDispatchToProps = {
  addDataList: addData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddData);

{
  /* <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Notes');
          }}>
          <View>
            <Text style={{color: 'red', fontSize: 25, fontWeight: 'bold'}}>
              Back To{' '}
              <Text style={{color: 'blue', fontSize: 25, fontWeight: 'bold'}}>
                Notes..
              </Text>
            </Text>
          </View>
        </TouchableOpacity> */
}
