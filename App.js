import React,{ useEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen'

// import Screen
import {BookDetail} from './screens/';
import {PlayerScreen} from './screens';
import { Book_read } from "./screens/";

// import Tabs
import Tabs from './navigation/tabs';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createStackNavigator();

const App = () => {

  useEffect(()=>{
    SplashScreen.hide();
    });

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        
        initialRouteName={'Home'}>
        {/* Tabs */}
        <Stack.Screen 
        name="Home" 
        component={Tabs} 
        />

        {/* Screens */}
        <Stack.Screen
          name="BookDetail"
          component={BookDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PlayerScreen"
          component={PlayerScreen}
          options={{headerShown: false}}
        />
        {/* read */}
        <Stack.Screen 
          name="Book_read" 
          component={Book_read}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
    


          


export default App;