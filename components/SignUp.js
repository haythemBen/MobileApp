import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet } from 'react-native';



import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';



//import home from '../App.js'

export default class SignUp extends Component {

    state = {
      name:'',  
      email: '',
      password: '',
    };
  
  
  onLogin({navigation}) {
    const { name,email, password } = this.state;
    Alert.alert('Credentials', `name:${name} + email: ${email} + password: ${password}`);
    
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.titleText}>Sign-up</Text>
        <Text style={styles.titleText}></Text>
       
        <TextInput
          value={this.state.name}
          //keyboardType = 'name'
          onChangeText={(name) => this.setState({ name })}
          placeholder='name'
          placeholderTextColor = 'white'
          style={styles.input}
        />
        <TextInput
          value={this.state.email}
          keyboardType = 'email-address'
          onChangeText={(email) => this.setState({ email })}
          placeholder='email'
          placeholderTextColor = 'white'
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder='password'
          secureTextEntry={true}
          placeholderTextColor = 'white'
          style={styles.input}
        />
        
     
        <TouchableOpacity
          style={styles.button}
          onPress={this.onLogin.bind(this)}
         // onPress={() => Login.navigation.navigate('Home' , { /* params go here */ })}
       >
         <Text style={styles.buttonText}> Sign Up </Text>
       </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3aafa9',
  },
  titleText:{
    //fontFamily: 'Baskerville',
    fontSize: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'powderblue',
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText:{
    //fontFamily: 'Baskerville',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 250,
    //fontFamily: 'Baskerville',
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 10,
  },
});
