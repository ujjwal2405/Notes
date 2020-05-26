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

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const {route}=this.props
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentView}>
          <Text style={styles.titleStyle}>{route.params.title}</Text>

          <View style={styles.dataView}>
            <Text style={{
                color:"red"
            }}>
            {route.params.time}
            </Text>
            <Text style={{
                color:"blue",
                marginTop:30
            }}>
                {route.params.data}
            </Text>
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
  titleStyle: {
    fontSize: 45,
    color: 'red',
    fontWeight: '800',
  },
  contentView: {
    marginTop: 25,
    marginLeft: 20,
    
  },
  dataView: {

     padding:20,
     marginHorizontal:35,
     marginTop:20,
     
     shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.43,
shadowRadius: 9.51,

elevation: 15,
     backgroundColor: 'white'
  },
});
export default Content;
