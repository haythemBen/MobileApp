// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'



class FilmItem extends React.Component {
  
  render() {
    //console.log(this.props)
    const film = this.props.film
    //const film= require('../components/dataHBM.json');
    
    return (
      <View style={styles.main_container}>
        <Image
          style={styles.image}
          source={require('../assets/venezia.jpg')}
      
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            {/* <Text style={styles.title_text}>{film.title}</Text> */}
            <Text style={styles.vote_text}>{film.postedBy.name}</Text>
          </View>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{film.title}</Text>
            {/* <Text style={styles.vote_text}>{film.postedBy.name}</Text> */}
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
            {/* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne */}
          </View>
          <View style={styles.date_container}>
          <Text style={styles.date_text}>Data:  {film.release_date}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row',
    backgroundColor: '#3aafa9',
    margin: 5
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray',
    
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
    fontWeight: 'bold',
    fontSize: 15,
    flex: 1,
    flexWrap: 'wrap',
    //paddingRight: 5
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
  }
})

export default FilmItem