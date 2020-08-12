import React from 'react';
import CharactersList from './CharactersList'
import {BrowserRouter, Route} from 'react-router-dom' 
import Welcome from '../Components/Welcome'
import NavBar from '../Components/NavBar'
import GamePlay from '../Components/GamePlay'
import '../App.css';

class App extends React.Component {

  state={
    characters: [],
    character: {}
  }

  componentDidMount(){
    fetch('http://localhost:3000/characters')
    .then(response => response.json())
    .then(charactersFetch => this.setState({
      characters: charactersFetch
    }))
  }

  characterClickHandler = (obj) => {
    this.setState({character: obj})
  }

  render(){
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={NavBar}/>
          <Route path="/welcome" component={Welcome}/>
          <Route path="/characters" render={() => <CharactersList characters={this.state.characters} characterClickHandler={this.characterClickHandler}/>}/>
          <Route path="/play" render={() => <GamePlay character={this.state.character}/>}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
