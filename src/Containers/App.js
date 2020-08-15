import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CharactersList from './CharactersList'
import Home from '../Components/Home'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import NavBar from '../Components/NavBar'
import GamePlay from '../Components/GamePlay'
import '../App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {},
      characters: [],
      character: {}
    };
  }

  componentDidMount(){
    fetch('http://localhost:3000/characters')
    .then(response => response.json())
    .then(charactersFetch => this.setState({
      characters: charactersFetch
    }))
    this.loginStatus()
  }

  // componentDidMount() {
  //     this.loginStatus()
  // }

  characterClickHandler = (obj) => {
    this.setState({character: obj})
  }

  loginStatus = () => {
      axios.get('http://localhost:3000/logged_in', {withCredentials: true})
      .then(response => {
        if (response.data.logged_in) {
          this.handleLogin(response)
        } else {
          this.handleLogout()
        }
      })
      .catch(error => console.log('api errors:', error))
  }

  handleLogin = (data) => {
      this.setState({
        isLoggedIn: true,
        user: data.user
      })
  }

  handleLogout = () => {
      this.setState({
      isLoggedIn: false,
      user: {}
      })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
        <Route path="/" component={NavBar}/>
            <Route path="/characters" render={() => <CharactersList characters={this.state.characters} characterClickHandler={this.characterClickHandler}/>}/>
            <Route path="/play" render={() => <GamePlay character={this.state.character}/>}/>
          <Switch>
            <Route 
              exact path='/' 
              render={props => (
              <Home {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/login' 
              render={props => (
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/signup' 
              render={props => (
              <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;