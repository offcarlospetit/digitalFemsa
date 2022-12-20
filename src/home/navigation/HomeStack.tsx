import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../containers/Home';
import Detail from '../containers/Detail';

type HomeStackParamList = {
  Home: undefined;
  Detail: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}

export default HomeStack;
