// promises help to mitigate callbacks
// axios makes XMLHttpRequests from the browser, makes http requests from node.js, and supports the Promise API
import axios from 'axios'

// searchSpotify returns a promise object
const searchSpotify = (searchItem) => new Promise((resolve, reject) => {
  // Promise object represents eventual completion or failure of an asynchronous operation and its resulting value
  const data = axios.get(`https://api.spotify.com/v1/search?q=${searchItem}&type=track`)
  data
  .then(({data}) => resolve(data))
  .catch((err) => reject(err))
})

export default searchSpotify
