import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import HighScoreCard from './HighScoreCard'

class Home extends React.Component {

  state ={
    users: []
  }
  handleClick = () => {
      axios.delete('http://localhost:3000/logout', {withCredentials: true})
      .then(response => {
        this.props.handleLogout()
        this.props.history.push('/')
      })
      .catch(error => console.log(error))
  }

  componentDidMount() {
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(usersObj => this.setState({
      users: usersObj.users
    }))
  }

  render (){
    return (
      <div>
        <h1>Welcome</h1>
        <Link to='/login'>Log In</Link>
        <br></br>
        <Link to='/signup'>Sign Up</Link>
        <br></br>
        { 
          this.props.loggedInStatus ? 
          <Link to='/logout' onClick={this.handleClick}>Log Out</Link> : 
          null
        }
        <div className="highScoresContainer">
          <p><HighScoreCard users={this.state.users}/></p>
        </div>
      </div>
    );
  }
};
export default Home;