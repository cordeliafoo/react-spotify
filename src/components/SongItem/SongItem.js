import React from 'react'

var styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: '360px',
    marginTop: '30px'
  },

  album: {
    display: 'flex',
    flexDirection: 'column'
  },

  albumName: {
    display: 'flex',
    justifyContent: 'center',
    color: '#d3d3d3',
    fontSize: '16px'
  },

  songAndDescription: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left',
    marginLeft: '20px'
  },

  image: {
    height: '266px',
    width: '300px',
    marginBottom: '10px'
  },

  songDescription: {
    color: '#d3d3d3',
    display: 'flex',
    justifyContent: 'left',
    fontSize: '21px',
    margin: '0 40px'
  }
}

// function component
const SongItem = (props) => {
  const album = props.songData.album
  const artist = props.songData.artists
  const albumName = album.name
  const albumArtist = artist[0].name
  const albumImage = album.images[1]
  const songPreview = props.songData.preview_url
  const songName = props.songData.name
  const songDuration = props.songData.duration_ms

  return (
    <div style={styles.root}>
      <div className='album'>
        <img src={albumImage.url} />
        <span style={styles.albumName}>Album: {albumName}</span>
        <span style={styles.albumName}>Artist: {albumArtist}</span>

      </div>
      <div style={styles.songAndDescription}>
        <audio controls duration src={songPreview} />
        <span>Title: {songName}</span>
        <span>Duration: {Math.floor((songDuration / 1000) / 60)} min {Math.floor((songDuration / 1000 - (Math.floor((songDuration / 1000) / 60)) * 60))} s</span>
      </div>
    </div>
  )
}

export default SongItem
