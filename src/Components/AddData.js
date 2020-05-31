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
import {imageConstants, colorConstants} from '../Config/constant';

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
      <SafeAreaView style={styles.container}>
        <View style={styles.selectTitleView}>
          <Text style={styles.selectTitleText}>Select a title</Text>
        </View>
        <View style={styles.titleButtonParent}>
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
            <Text style={styles.titleText}>Title :</Text>{' '}
            <Text style={styles.titleText}>{this.state.title}</Text>
          </Text>
        </View>
        <View style={styles.addDataView}>
          <TextInput
            placeholder="Add your Data"
            style={styles.addDataPlaceholder}
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
          <View style={styles.addData}>
            <Text style={{color: colorConstants.white}}>Add Data</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.messageView}>
          <Text style={{color: colorConstants.red}}>{this.state.message}</Text>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  titleButtonView: {
    backgroundColor: colorConstants.black,
    padding: 15,
    borderRadius: 10,
  },
  titleName: {color: colorConstants.white},
  container: {flex: 1},
  selectTitleView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  selectTitleText: {fontSize: 20, fontWeight: 'bold', color: 'blue'},
  titleButtonParent: {
    flexDirection: 'row',
    padding: 25,
    justifyContent: 'space-evenly',
  },
  titleText: {fontSize: 20, color: colorConstants.red, fontWeight: 'bold'},
  addDataView: {marginTop: 10},
  addDataPlaceholder: {
    marginHorizontal: 40,
    padding: 15,
    borderWidth: 1,
    borderColor: colorConstants.black,
    marginTop: 20,
    color: colorConstants.red,
  },
  addData: {
    backgroundColor: colorConstants.black,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginHorizontal: 70,
  },
  messageView: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginHorizontal: 70,
  },
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
