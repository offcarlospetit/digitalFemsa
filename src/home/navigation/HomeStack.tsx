import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../containers/Home';
import Detail from '../containers/Detail';

export type HomeStackParamList = {
  Home: undefined;
  Detail: {
    title: string;
    createdAt: string;
    points: number;
    image?: string;
  };
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
