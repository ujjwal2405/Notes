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
        title:"",
        data:"",
        message:""
    };
  }

  render() {
      const {title,data}=this.state
      const {loginId}=this.props
    return (
      <SafeAreaView style={{flex: 1}}>
        <TouchableOpacity
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
        </TouchableOpacity>

        <View style={{marginTop:70}}>
        <TextInput
            placeholder="Title"
            style={{marginHorizontal:40,padding:15,borderWidth:1,borderColor:"black",color:"red"}}
            onChangeText={txt => this.setState({title: txt})}
          />

            <TextInput
            placeholder="Username"
            style={{marginHorizontal:40,padding:15,borderWidth:1,borderColor:"black",marginTop:20,color:"red"}}
            onChangeText={txt => this.setState({data: txt})}
          />
        </View>

          <TouchableOpacity
          onPress={()=>{
              this.props.addDataList(title,data,loginId),
              this.setState({
                message:"Data Added"
              })
          }}
          >
              <View style={{backgroundColor:"black",padding:20,justifyContent:"center",alignItems:"center",marginTop:25,marginHorizontal:70}}>
                  <Text style={{color:"white"}}>
                      Add Data
                  </Text>
              </View>
          </TouchableOpacity>
              <View style={{
                padding:20,justifyContent:"center",alignItems:"center",marginTop:25,marginHorizontal:70
              }}>
              <Text style={{color:"red"}}>{this.state.message}</Text>
              </View>
      </SafeAreaView>
    );
  }
}


const mapStateToProps = state => ({
    loginId:state.loginReducer.loginId
  });
  
  const mapDispatchToProps = {
    addDataList: addData,
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AddData);


