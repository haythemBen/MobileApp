
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Users from './Users.js'
import Posts from './Posts.js'
import SignUp from './SignUp.js'
import SignIn from './SignIn.js'



export function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Home' , { /* params go here */ })}
        title="Go to notifications"
      />
{/* There are two pieces to this: */}
{/* Pass params to a route by putting them in an object as a second parameter to the navigation.navigate function: navigation.navigate('RouteName', { /* params go here */ }) */}
{/* Read the params in your screen component: route.params. */}
    </View>
  );
}

export function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button 
      //onPress={() => navigation.goBack()} title="Go back home" 
      onPress={() => navigation.navigate('SignUp', {navigation}) } title="Go back home"
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="SignUp">
        <Drawer.Screen name="SignIn" component={SignIn} />
        <Drawer.Screen name="SignUp" component={SignUp} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
