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
      <div classname="welcomecontainer">
        <div className="welcomediv">
        {
          this.props.loggedInStatus ? null :
          <Link to='/login' className="login"> | Log In |</Link>
        }

        {        
          this.props.loggedInStatus ? null :
          <Link to='/signup' className="signup">| Sign Up |</Link>
        }
        { 
          this.props.loggedInStatus ? 
          <Link to='/logout' onClick={this.handleClick} className="logout"> | Log Out | </Link> : 
          null
        }
        </div>
        <br></br>
        <br></br>
        <div className="highScoresContainer">
          <p><HighScoreCard users={this.state.users}/></p>
        </div>
      </div>
    );
  }
};
export default Home;