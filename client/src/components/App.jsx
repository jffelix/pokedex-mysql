import React from 'react';

import Types from './Types.jsx';

import axios from 'axios';

import AllList from './AllList.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    // create state object
    this.state = {
      pokeList: []
    }

    this.getAllPokemon = this.getAllPokemon.bind(this);
  }

  componentDidMount() {
    // invoke getallpokemon
    this.getAllPokemon();
  }

  getAllPokemon() {
    axios.get('/showall')
      .then(response => {
        this.setState({
          pokeList: response.data
        })
      })
      .catch(err => {
        console.log('Error received while loading all Pokemon: ', err);
      })
  }

  render() {

    return (

      <div>
        <h1>Fullstack Pokedex!</h1>
        <button>Show All</button>
        <select id="types">
          <option>Sort by Type</option>
          <option>Grass</option>
          <option>Fire</option>
          <option>Water</option>
        </select>
        <AllList allPoke={this.state.pokeList}/>
      </div>

    )
  }


}

export default App;