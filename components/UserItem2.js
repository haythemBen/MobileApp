
import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'



//import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet } from 'react-native';


class UserItem2 extends React.Component {
    onLogin({navigation}) {
        
        //Alert.alert('Credentials', `email: ${email} + password: ${password}`);
        
      }
  render() {
    const user = this.props.hbm

    return (
      
      <View style={styles.main_container}>
         
        <Image
          style={styles.image}
          //source={require('../assets/hbm.jpg')}
          source={require('../assets/avatar.png')}
        
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
                <Text style={styles.vote_text}>{user.name}</Text>
          </View>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.button }
            //onPress={() => this.props.navigation.navigate('SignIn')}
            //onPress={() => this.props.navigation.navigate('Crea un post')}
            //onPress={this.onLogin.bind(this)}
          // onPress={() => Login.navigation.navigate('Home' , { /* params go here */ })}
          >
          <Text style={styles.buttonText}> Profile </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonFollow}
            //onPress={this.onLogin.bind(this)}
            onPress={() => this.props.navigation.navigate('SignUp')}
          // onPress={() => Login.navigation.navigate('Home' , { /* params go here */ })}
            >
            <Text style={styles.buttonText2}> Follow </Text>
          </TouchableOpacity>

        </View>
      

      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    alignItems: 'center',
    height: 230,
    width:150,
    flexDirection: 'column',
    backgroundColor: '#3aafa9',
    margin: 10,
    
    
    
  },
  image: {
    width: 120,
    height: 140,
    margin: 5,
    backgroundColor: 'gray',
    //alignContent: 'center',

    
  },
  content_container: {
    flex: 1,
    //margin: 5,
    //alignItems: 'center'
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 15,
    flexWrap: 'wrap',

  },
  libelle_text: {
    fontWeight: 'bold',
    fontSize: 12,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote_text: {
    //fontWeight: 'bold',
    fontSize: 15,
    color: 'white'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#ffffff'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 12
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'powderblue',
    width: 55,
    height: 30,
    padding: 5,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 10,
    marginLeft:10,
    marginRight:10,
    borderRadius: 5,
  },
  buttonFollow: {
    alignItems: 'center',
    backgroundColor: '#007bff',
    width: 55,
    height: 30,
    padding: 5,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 10,
    marginLeft:10,
    marginRight:10,
    borderRadius: 5
  },
  buttonText:{
    //fontFamily: 'Baskerville',
    fontSize: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText2:{
    //fontFamily: 'Baskerville',
    fontSize: 12,
    alignItems: 'center',
    justifyContent: 'center',
    color:'white',
  },
})

export default UserItem2