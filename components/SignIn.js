import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet } from 'react-native';






//import home from '../App.js'

export default class SignIn extends Component {

    state = {
      email: '',
      password: '',
    };
  
  
  onLogin({navigation}) {
    const { email, password } = this.state;
    Alert.alert('Credentials', `email: ${email} + password: ${password}`);
    
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.titleText}>Sign-in</Text>
        <Text style={styles.titleText}></Text>
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
          placeholder={'password'}
          secureTextEntry={true}
          placeholderTextColor = 'white'
          style={styles.input}
        />
        
     
        <TouchableOpacity
          style={styles.button}
          //onPress={this.onLogin.bind(this)}
          onPress={() => this.props.navigation.navigate('Profilo')}
         // onPress={() => Login.navigation.navigate('Home' , { /* params go here */ })}
       >
         <Text style={styles.buttonText}> Login </Text>
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
