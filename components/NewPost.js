import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet } from 'react-native';



import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';



//import home from '../App.js'

export default class NewPost extends Component {

    state = {
      title:'',  
      body: '',
      photo: '',
    };
  
  
  onLogin({navigation}) {
    // const { title,body, photo } = this.state;
    // Alert.alert('Credentials', `name:${ti} + email: ${email} + password: ${password}`);
    
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.titleText}>New Post</Text>
        <Text style={styles.titleText}></Text>
       
        <TextInput
          value={this.state.name}
          //keyboardType = 'name'
          onChangeText={(title) => this.setState({ title })}
          placeholder='title'
          placeholderTextColor = 'white'
          style={styles.input}
        />
        <TextInput
          value={this.state.body}
          keyboardType = 'Post-body'
          onChangeText={(body) => this.setState({ body })}
          placeholder='body'
          placeholderTextColor = 'white'
          style={styles.inputBody}
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
         <Text style={styles.buttonText}> Create Post </Text>
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

  inputBody: {
    width: 250,
    height: 50,
    //fontFamily: 'Baskerville',
    fontSize: 20,
    height: 120,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 10,
  },
});
