import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStack} from '../home';

type MaintackParamList = {
  Main: undefined;
};

const Stack = createNativeStackNavigator<MaintackParamList>();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
