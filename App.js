
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Utenti from './components/Utenti.js'
import Posts from './components/Posts.js'
import SignUp from './components/SignUp.js'
import SignIn from './components/SignIn.js'
import CercaUtenti from './components/CercaUtenti.js'
import NewPost from './components/NewPost.js'
import UserProfile from './components/UserProfile.js'

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
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>

      <Drawer.Navigator initialRouteName="SignUp">
        <Drawer.Screen name="Home" component={Posts} />
        <Drawer.Screen name="Utenti" component={Utenti} />
        <Drawer.Screen name="Profilo" component={UserProfile} />
        <Drawer.Screen name="Crea un post" component={NewPost} />
        <Drawer.Screen name="Cerca Utenti" component={CercaUtenti} />
        {/* <Drawer.Screen name="SignIn" component={SignIn} />
        <Drawer.Screen name="SignUp" component={SignUp} /> */}
        <Drawer.Screen name="Esci" component={SignIn} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
