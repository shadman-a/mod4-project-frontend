import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CharactersList from './CharactersList'
import Home from '../Components/Home'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import NavBar from '../Components/NavBar'
import GamePlay from '../Components/GamePlay'
import Profile from '../Components/Profile'
import '../App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {},
      characters: [],
      character: {},
      points: 0
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

  pointsClickHandler = (number) => {
    if (number === 0 || number === null){
      this.setState({
        points: 0
      })
    } else {
    this.setState({points: number})}
    fetch('http://localhost:3000/game_plays', {
            method: "POST",
            headers: {
                "accepts": "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify({
                character_id: this.state.character.id,
                user_id: this.state.user.id,
                points: this.state.points
            })
        })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
            <Route path="/" render={() => <NavBar/>}/>
            <Route path="/characters" render={() => <CharactersList characters={this.state.characters} characterClickHandler={this.characterClickHandler}/>}/>
            <Route path="/play" render={() => <GamePlay pointsClickHandler={this.pointsClickHandler}character={this.state.character}/>}/>
            <Route path="/profile" render={()=> <Profile points={this.state.points} user={this.state.user} character={this.state.character}/>}/>
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