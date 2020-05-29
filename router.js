import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/Components/Login';
import Home from './src/Components/Home';
import * as React from 'react';
import {Provider} from 'react-redux';
import store from './src/Services/rootreducer';
import SignUp from './src/Components/SignUp';
import Notes from './src/Components/Notes';
import AddData from './src/Components/AddData'
import Content from './src/Components/Content'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function drawerNavigator() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#4a4a4a',
        shadowColor: '#f2f2f2',
        width:200
      }}>
      <Drawer.Screen name="Notes" component={Notes} />
      <Drawer.Screen name="Dark Mode" component={Login} />
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
        name="Notes"
        component={drawerNavigator}
        options={{headerShown: false}}
      />

        <Stack.Screen
        name="AddData"
        component={AddData}
        // options={{headerShown: false}}
      />
       <Stack.Screen
        name="Content"
        component={Content}
      
      />


    
    
    {/* <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      /> */}
        
        
       
      
     

      
      
      
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
