import React from 'react'
import { NavLink } from 'react-router-dom'

class Profile extends React.Component{

    state = {
        high_score: 0
    }

    componentDidMount(){
        if (this.props.points > this.props.user.high_score || this.props.user.high_score === null){
           fetch(`http://localhost:3000/users/${this.props.user.id}`,{
            method: "PATCH",
            headers: {
                "accepts": "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify({
                high_score: this.props.points
            })
           })
           .then(response=>response.json())
           .then(this.setState({
               high_score: this.props.points
           }))
        }   
    }

    deleteHandler = () => {
        fetch(`http://localhost:3000/users/${this.props.user.id}`,{ method: "DELETE"}
    )}

    getHighScore = () => {
        if (this.props.user.high_score === 0 || this.props.user.high_score === null || this.props.points > this.props.user.high_score) {
            return <h2>Your High Score is: {this.props.points}</h2>
        } else {
            return <h2>Your High Score is: {this.props.user.high_score}</h2>
        }
    }

    render(){
        console.log(this.props.points)
        
        return(
        <div className="welcomecontainer">
        <h1>Game Over</h1>
        <h1>Hi, {this.props.user.username} </h1>
        {this.props.points > this.props.user.high_score ? <h2>Your High Score is: {this.props.points}</h2> :<h2>Your High Score is: {this.props.user.high_score}</h2>}
        <h3>Your most recent score is: {this.props.points}</h3>
        <NavLink style={{color: 'white', textDecoration: 'none', backgroundColor: 'red', padding: '14px 25px'}} to='/login' onClick={this.deleteHandler}>Delete</NavLink>
        </div>
        )
    }

}

export default Profile