import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

import Login from './src/Components/Login'
import Home from './src/Components/Home'
import * as React from 'react';
import {Provider} from 'react-redux';
import store from './src/Services/rootreducer';
import SignUp from './src/Components/SignUp';

const Drawer = createDrawerNavigator();
const Stack=createStackNavigator();

function drawerNavigator() {
    return (
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: '#4a4a4a',
          shadowColor: '#f2f2f2',
        }}>
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="SignUp" component={SignUp} />
   
      </Drawer.Navigator>
    );
  }

const MyStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={drawerNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };


const App = () => {
  return (
    <Provider store= {store}>
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
     </Provider>
   
  );
};

export default App;