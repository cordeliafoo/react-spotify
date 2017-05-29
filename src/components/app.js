import React, { Component } from 'react'
import SearchBar from './SearchBar/SearchBar'
import searchSpotify from '../searchSpotify/searchSpotify'
import SongItem from './SongItem/SongItem'
import SongList from './SongList/SongList'

var styles = {
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'

  }
}

export default class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      initialMessage: 'greeting',
      song: '',
      tracks: [],
      songPosition: 0
    }
  }

  updateText = (songSearch) => {
    console.log('song', songSearch);
    this.setState({song: songSearch})
  }

  fetchSongs = () => {
    console.log('i\'m fetching songs');
    searchSpotify(this.state.song).then(({ tracks }) => this.setState({tracks: tracks}))
    // SearchSpotify returns a Promise object
    // this returned Object has a tracks attribute.
    // wrappping tracks in {} gives direct access to the tracks attribute

  }

  render () {
    // destructuring our state
    const {tracks, songPosition} = this.state
    console.log('tracks', tracks);
    console.log('songPosition', songPosition);
    return (
      <div style={styles.root}>
        <SearchBar updateText={this.updateText} fetchSongs={this.fetchSongs}/>
        {/* tracks is empty off the bat.  hence need to 'safeguard' the component by using && */}
        {tracks.items && <SongItem songData={tracks.items[songPosition]}/>}
        {tracks.items && <SongList listOfSongs={tracks.items} selectSong={(songPosition) => this.setState({songPosition: songPosition})} />}
      </div>
    )
  }
}
