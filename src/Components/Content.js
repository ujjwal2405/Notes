import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  FlatList,
  Animated,
  Image
} from 'react-native';
import {connect} from 'react-redux';
import {deleteData} from '../Services/Delete/action';
import {imageConstants,colorConstants} from '../Config/constant';
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.opacity = new Animated.Value(0);
    this.state = {
      lineCount: 1,
      viewNote: 'View Full Note',
    };
  }

  componentDidMount() {
    Animated.timing(this.opacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const {route} = this.props;
    console.log('Content Screen', route.params);
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.titleView}>
          <Animated.Text style={{opacity: this.opacity}}>
            <Text style={styles.textStyle}>{route.params.title}</Text>
          </Animated.Text>
        </View>
        <FlatList
          data={route.params.content}
          style={styles.flatList}
          renderItem={({item}) => {
            return (
              <View style={styles.dataView}>
                <Text style={styles.dateText}>
                  Created on {item.createdDate.slice(0, 10)}{' '}
                  <Text style={styles.timeText}> at </Text>
                  {item.createdDate.slice(11, 19)}
                </Text>
                <Text
                  numberOfLines={this.state.lineCount}
                  style={styles.noteDataText}>
                  {item.data}
                </Text>

                <TouchableOpacity
                  onPress={() => {
                    this.props.deleteData(this.props.loginId, item.id);
                  }}>
                  <View style={styles.deleteView}>
                  <Image source={imageConstants.delete} />
                  </View>
                </TouchableOpacity>
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
    backgroundColor: colorConstants.white,
  },
  titleStyle: {
    fontSize: 45,
    color: colorConstants.red,
    fontWeight: '800',
  },
  contentView: {
    marginTop: 25,
    marginLeft: 20,
  },
  dataView: {
    padding: 20,
    marginHorizontal: 35,
    marginTop: 20,
    borderRadius: 40 / 2,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
    backgroundColor: colorConstants.white
  },
  titleView: {
    marginTop: 30,
    marginLeft: 30,
  },
  textStyle: {
    color: colorConstants.red,
    fontSize: 50,
    fontWeight: '900',
  },
  dateText: {
    color: colorConstants.red,
    fontWeight: 'bold',
  },
  timeText: {
    color: 'blue',
  },
  noteDataText: {
    marginTop: 20,
    color: 'blue',
    fontWeight:"bold"
  },
  deleteView: {
    marginTop: 20,
  },
  flatList: {
    marginTop: 25,
  },
});
const mapStateToProps = state => ({
  loginId: state.loginReducer.loginId,
});

const mapDispatchToProps = {
  deleteData: deleteData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Content);

// dateModifier = () => {
//   this.props.route.params.content.forEach(item => {
//     console.log(item);
//     let onlyDate = item.createdDate.slice(0, 10);
//     let onlyDateReplace = onlyDate.split('-');

//     console.log(onlyDate);
//     console.log(onlyDateReplace);
//   });
// };

{
  /* <TouchableOpacity
onPress={()=>{
  this.props.navigation.navigate('Notes')
}}
>
  <Text>
    Backk
  </Text>
</TouchableOpacity> */
}

{
  /* <TouchableOpacity
                onPress={()=>{
                  this.setState({
                    lineCount:0,
                    viewNote:""
                  })
                }}
                >
                  <Text>
                   {this.state.viewNote}
                  </Text>
                </TouchableOpacity> */
}
