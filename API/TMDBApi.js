// API/TMDBApi.js

const API_TOKEN = "28464c77bb658c045c53fec1b1b69912";

export function getFilmsFromApiWithSearchedText (text) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}


// MONGO_URI= mongodb+srv://haythem:123456711@nodeapi-k7enz.mongodb.net/hbm?retryWrites=true&w=majority
// PORT = 8080
// JWT_SECRET = m6uyffghghjhgghfgfg
// CLIENT_URL = http://localhost:3000



export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}

export function Item({ film }) {
  let ed = 'data:image/jpeg;base64,' + film;
  return ( ed
    // <View>
    //   <Image source={{ uri: ed }} />
    // </View>
  );
}

export function arrayBufferToBase64(buffer) {
  let binary = '';
  let bytes = new Uint8Array(buffer);
  let len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}



