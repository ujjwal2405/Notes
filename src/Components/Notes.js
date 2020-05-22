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
import {imageConstants} from '../Config/constant';

class Dark extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
export default Dark;
