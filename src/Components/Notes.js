import React, {Component, PureComponent} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import {imageConstants} from '../Config/constant';

import {connect} from 'react-redux';
import {displayData} from '../Services/Notes/action';

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

// componentDidMount(){
//     this.props.displayDataList(this.props.loginId)
// }

// groupTitle=()=>{
//     var apiData=this.props.data.response
//    var result = apiData.reduce(function (r, a) {
//         r[a.title] = r[a.title] || [];
//         r[a.title].push(a);
//         return r;
//     }, Object.create(null));
// console.log("Grouped",result)
// }


  render() {
     console.log("Data inside Notes App",this.props.data.response)
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

            <TouchableOpacity
            onPress={()=>{
                this.props.displayDataList(this.props.loginId)//this.groupTitle()
            }}
            >

            <Text>
                Display Data
            </Text>

            </TouchableOpacity>


        <View style={styles.textView}>
          <Text style={styles.textStyle}>
            My <Text style={styles.textStyle}>Notes</Text>
           
          </Text>
        </View>


        <FlatList
            data={this.props.data.response}
            renderItem={({item}) => {
              return (
                <View style={{marginLeft:15,marginTop:20}}>
                    <View style={{padding:20}}>
                   
                    <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate('Content',{
                            title:item.title,
                            data:item.data,
                            time:item.createdDate
                        })
                    }}
                    >
                    <Text style={{color:"blue",fontSize:25}}>{item.title}</Text>
                    </TouchableOpacity>
                    </View>
                   
                </View>
              );
            }}
            keyExtractor={item => item.id}
          />
        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
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
    marginTop: 60,
    alignItems: 'center',
  },
  textStyle: {
    color: 'blue',
    fontSize: 60,
    fontWeight: '900',
  },
});


const mapStateToProps = state => ({
    loginId:state.loginReducer.loginId,
    data:state.displayReducer.displayData
  });
  
  const mapDispatchToProps = {
    displayDataList: displayData,
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Notes);

