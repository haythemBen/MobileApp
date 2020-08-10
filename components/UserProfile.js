
import React from 'react'
import { StyleSheet, View, Text, Image ,TouchableOpacity , FlatList} from 'react-native'

import FilmItem from './FilmItem'
import posts from '../Helpers/filmsData'

//import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'


class UserProfile extends React.Component {
    onLogin({navigation}) {
        
        //Alert.alert('Credentials', `email: ${email} + password: ${password}`);
        
      }
  render() {
    //console.log(this.props)
    //const film = this.props.film
    const user= require('../Helpers/userprofileData.json');
    
    return (

<View /*style={styles.main_container2}*/>
        <View style={{...styles.head_cont,flexDirection:'column'}}>  
          <Text style={{marginLeft:130, marginTop:5}}> </Text>
          <Text style={{marginLeft:10, marginTop:5}}>Profile </Text>
        </View>

        <View style={styles.main_container}>
            <Image
            style={styles.image}
            source={require('../assets/hbm.jpg')}
            />
                <View style={styles.content_container}>
                
                <View /*style={styles.header_container}*/>
                    {/* <Text style={styles.title_text}>{film.title}</Text> */}
                    <Text style={styles.vote_text}>{user.name}</Text>
                </View>
                
                <View /*style={styles.date_container}*/>
                    <Text style={styles.title_text}>E-mail: {user.email}</Text>
                    {/* <Text style={styles.vote_text}>{film.postedBy.name}</Text> */}
                </View>
                
                <View /*style={styles.description_container}*/>
                    <Text /*style={styles.description_text}*/ numberOfLines={6}>About:{user.about}</Text>
                    {/* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne */}
                </View>

                <View /*style={styles.date_container}*/>
                    <Text /*style={styles.date_text}*/>Since:  {new Date(user.created).getFullYear()}</Text>
                </View>
            </View>
        </View>

        <View style={styles.button_group}>
            <TouchableOpacity
                style={{... styles.button, backgroundColor :'#28a745' }}
                onPress={() => this.props.navigation.navigate('Crea un post')}
                //onPress={this.onLogin.bind(this)}
                // onPress={() => Login.navigation.navigate('Home' , { /* params go here */ })}
                >
                <Text style={{...styles.buttonText, color:'white'}}> NewPost </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{... styles.button, backgroundColor :'#17a2b8' }}
                onPress={() => this.props.navigation.navigate('Utenti')}
                //onPress={this.onLogin.bind(this)}
                // onPress={() => Login.navigation.navigate('Home' , { /* params go here */ })}
                >
                <Text style={{...styles.buttonText, color:'white'}}> EditProfile </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{... styles.button, backgroundColor :'#ffc107' }}
                onPress={() => this.props.navigation.navigate('SignUp')}
                //onPress={this.onLogin.bind(this)}
            // onPress={() => Login.navigation.navigate('Home' , { /* params go here */ })}
                >
                <Text style={styles.buttonText}> DeleteProfile </Text>
            </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row' ,padding:5,backgroundColor: 'white'}}>
            <Text style={{marginLeft:30}}>{user.followers.length} Followers </Text>
            <Text style={{marginLeft:30}}>{user.following.length} Following </Text>
        </View>

    
       
        
        <View /*style={styles.main_container2}*/>

        <FlatList
          //data={this.state.films}
          data={posts}
          //keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem film={item}/>}
        />
        
      </View>



    </View>
    
    

    )
  }
}

const styles = StyleSheet.create({

  button_group:{
    flex: 1, 
    flexDirection: 'row' ,
    //marginTop:10,
    justifyContent: 'center',
    alignItems: 'flex-end',
    
    //alignContent:'flex-end'
  }, 
  head_cont: {
    height: 50,
    //flexDirection: 'column',
    //backgroundColor: '#e9ecef',
    backgroundColor: 'white',
    marginTop:20,
  },
  main_container2: {
    //height: 300,
    //flexDirection: 'column',
    //backgroundColor: '#3aafa9',
    backgroundColor: 'blue',
    margin: 5,
    marginTop:50,
  },
  main_container: {
    height: 200,
    flexDirection: 'row',
    backgroundColor: 'white',
    //backgroundColor: '#3aafa9',
    //margin: 5,
    //marginTop:20
  },
  image: {
    width: 120,
    height: 120,
    margin: 5,
    backgroundColor: 'gray',
    borderRadius: 100,
    marginTop:30
    
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 1,
    flexDirection: 'row'
  },
  title_text: {
    //fontWeight: 'bold',
    fontSize: 11,
    //flex: 1,
    flexWrap: 'wrap',
    color:'blue',
    //paddingRight: 5
    marginBottom:0,
    marginTop:5,
  },
  libelle_text: {
    fontWeight: 'bold',
    fontSize: 12,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#666666'
  },
  description_container: {
    flex: 1
  },
  description_text: {
    fontStyle: 'italic',
    //color: '#ffffff'
  },
  date_container: {
    flex:1,
    marginTop:0 
  },
  date_text: {
    textAlign: 'left',
    fontSize: 12
  },

  button: {
    alignItems: 'center',
    backgroundColor: 'powderblue',
    width: 100,
    height: 33,
    padding: 5,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 10,
    marginLeft:5,
    borderRadius: 6
    //justifyContent:'flex-start'
    //marginRight:10
  },
  buttonFollow: {
    alignItems: 'center',
    backgroundColor: 'green',
    width: 70,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 10,
    marginLeft:0,
    marginRight:10
  },
  buttonText:{
    //fontFamily: 'Baskerville',
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText2:{
    //fontFamily: 'Baskerville',
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'center',
    color:'white',
  },
})

export default UserProfile