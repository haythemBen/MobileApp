// Components/Posts.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'

import posts from '../Helpers/filmsData'

class Posts extends React.Component {

  constructor(props) {
    super(props)
    this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state
    this.state = {
      films: [],
      isLoading: false // Arrêt du chargement
    }
  }

  _loadPosts() {
    this.setState({isLoading: true}) // Lancement du chargement
    if (this.searchedText.length > 0) { // Seulement si le texte recherché n'est pas vide
    
      getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
          this.setState({ 
            films: data.results,
            isLoading: false
          })
      })
    }
  }

  _searchTextInputChanged(text) {
    this.searchedText = text // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
  }


  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
          {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
        </View>
      )
    }
  }

  render() {
    //console.log(this.getDataUsingGet())
    console.log(this.state.isLoading)
    return (
      <View style={styles.main_container}>
         {/* <Button title='Get Data Using GET' onPress={this.getDataUsingGet}/> */}
        {/* <TextInput
          style={styles.textinput}
          placeholder='Cercare'
          onSubmitEditing={()=>this._loadFilms()}
          onChangeText={(text) => this._searchTextInputChanged(text)}
        />
        <Button title='Home' onPress={() => this._loadPosts()}/> */}
        <FlatList
          //data={this.state.films}
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem film={item}/>}
        />
        {/* {this.state.isLoading ?
          <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
          </View>
          : null
        } */}
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Posts