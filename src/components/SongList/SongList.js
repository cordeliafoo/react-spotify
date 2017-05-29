import React from 'react'

var styles = {
  root: {
    display: 'flex',
    width: '100%',
    height: '300px',
    overflow: 'scroll',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginTop: '20px'
  },
  eachSong: {
    display: 'flex',
    flexDirection: 'column'
  },

  image: {
    height: '200px',
    width: '200px',
    marginTop: '10px',
    marginBottom: '10px',
    marginLeft: '10px',
    marginRight: '10px'
  },

  songDescription: {
    justifyContent: 'center',
    color: '#d3d3d3',
    fontSize: '12px',
    marginTop: '10px',
    marginBottom: '10px',
    marginLeft: '10px',
    marginRight: '10px'
  }
}

const eachSong = (props) => {
  const {album, name} = props
  const albumImage = album.images[0]
  return (
  <div style={styles.eachSong}>
      <img src={albumImage.url} style={styles.image} />
      <span style={styles.songDescription}>Title: {name}</span>
  </div>
  )
}
// functional component
const SongList = (props) => {
  console.log(props.listOfSongs); //this returns an array of objects
  return (
    <div style={styles.root}>
      {props.listOfSongs.map(
        (songData, index) =>
        <div key={songData.uri} onClick={() => props.selectSong(index)}>
          {eachSong(songData)}
        </div>)}

      </div>
  )
}





export default SongList
