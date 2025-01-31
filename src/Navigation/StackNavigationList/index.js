import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AddCardDetails from '../../Screens/AddCardDetails';
import ListCardDetails from '../../Screens/ListCardDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UpdateCardDetails from '../../Screens/UpdateCardDetails';

const StackNavigationList = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}
        initialRouteName="ListCardDetails">
        <Stack.Screen name="ListCardDetails" component={ListCardDetails} />
        <Stack.Screen name="AddCardDetails" component={AddCardDetails} />
        <Stack.Screen name="UpdateCardDetails" component={UpdateCardDetails} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigationList;
