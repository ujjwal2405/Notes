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

import Modal from 'react-native-modal'

class Dark extends React.Component {
  constructor(props) {
    super(props);
    this.state={
       
    }
  }



  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.toggleDrawer();
            }}>
            <View style={{marginLeft:20}}>
              <Image
                source={require('../Assets/Hamburger.png')}
                style={{height: 30, width: 30}}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=>{
            this.props.navigation.navigate('AddData')
          }}
          >
          <View style={{marginRight:20}}>
              <Image
                source={require('../Assets/Plus.png')}
               />
            </View>
            </TouchableOpacity>
        </View>
      

        <View
          style={{
            justifyContent: 'center',
            marginTop: 60,
            alignItems: 'center',
          }}>
          <Text style={{color: 'red', fontSize: 60, fontWeight: '900'}}>
            My{' '}
            <Text style={{color: 'blue', fontSize: 60, fontWeight: '900'}}>
              Notes
            </Text>
          </Text>
        </View>

       
      </SafeAreaView>
    );
  }
}
export default Dark;









 {/* <View style={{flex: 1,justifyContent: 'flex-end'}}>
        <TouchableOpacity
        style={{width:'100%',height:40,backgroundColor:'red', 
        alignItems:'center',justifyContent:'center'}}
        >
        <Text style={{color:'white', fontSize: 16}}>Bottom Button</Text>
        </TouchableOpacity>
        </View> */}




//   toggleModal =()=>{
//       console.warn("I am running")
//       console.warn(this.state.visible)
//     return (
//         <View>
//           <Modal isVisible={this.state.visible}>
//             <View style={{ height:200,width:500 ,backgroundColor:"red"}}>
//               <Text>I am the modal content!</Text>
//             </View>
//           </Modal>
//         </View>
//       )
//   }