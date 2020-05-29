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
  FlatList,
} from 'react-native';

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  dateModifier = () => {
    this.props.route.params.content.forEach(item => {
      console.log(item);
      let onlyDate = item.createdDate.slice(0, 10);
      let onlyDateReplace = onlyDate.split('-');

      console.log(onlyDate);
      console.log(onlyDateReplace);
    });
  };

  render() {
    const {route} = this.props;
    console.log('Content Screen', route.params.content[0].createdDate);
    return (
      <SafeAreaView style={styles.container}>
        {/* <View style={styles.contentView}>
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
        </View> */}

        <FlatList
          data={route.params.content}
          renderItem={({item}) => {
            return (
              <View style={styles.dataView}>
                <Text style={{color: 'red'}}>
                  Created at {item.createdDate.slice(0, 10)}{' '}
                  <Text style={{color: 'blue'}}> at </Text>
                  {item.createdDate.slice(11, 19)}
                </Text>
                <Text style={{marginTop: 20,color:"blue"}}>{item.data}</Text>
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
    padding: 20,
    marginHorizontal: 35,
    marginTop: 20,
    borderRadius:40/2,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
    backgroundColor: 'white',
  },
});
export default Content;
