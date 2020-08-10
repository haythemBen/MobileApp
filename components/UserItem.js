
import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'


class UserItem extends React.Component {

  render() {
    const user = this.props.hbm

    return (
      
      <View style={styles.main_container}>
         
        <Image
          style={styles.image}
          source={require('../assets/hbm.jpg')}
        
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
                <Text style={styles.vote_text}>{user.name}</Text>
          </View>

          <View style={styles.header_container}>
                <Text style={styles.title_text}>{user.email}</Text>
          </View>
         
          
        </View>
      

      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    alignItems: 'center',
    height: 200,
    width:150,
    flexDirection: 'column',
    backgroundColor: 'white',
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
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    //fontWeight: 'bold',
    fontSize: 12,
    flexWrap: 'wrap',
  //alignContent: 'center',

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
    fontSize: 16,
    color: '#007bff',
    //textAlign: 'center',
    //flex: 3,
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
    //textAlign: 'right',
    fontSize: 12
  }
})

export default UserItem