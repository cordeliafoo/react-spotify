import React from 'react'

var styles = {
  root: {
    alignItems: 'center',
    display: 'flex',
    margin: '50px auto'
  },

  input: {
    border: '1px solid #d3d3d3',
    borderRadius: '3px',
    marginRight: '10px',
    width: '350px',
    height: '40px',
    fontSize: '20px',
    textAlign: 'center'
  },

  button: {
    border: 'none',
    backgroundColor: '#1ED760',
    borderRadius: '15px',
    color: '#fff',
    height: '30px',
    width: '100px'
  }

}

// functional component
const SearchBar = (props) => (
  <div style={styles.root}>
    <input style={styles.input} onChange={(event) => { props.updateText(event.target.value) }} />
    <button style={styles.button} onClick={props.fetchSongs}>Get Songs</button>
  </div>

)

export default SearchBar
