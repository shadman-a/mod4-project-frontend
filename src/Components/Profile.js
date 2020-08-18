import React from 'react'
import NavBar from './NavBar'
import { NavLink } from 'react-router-dom'

class Profile extends React.Component{

    state ={
        user: this.props.user.username,
        score: this.props.points
    }

    componentDidMount(){
        if (this.state.score > this.props.user.high_score || this.props.user.high_score === null){
           fetch(`http://localhost:3000/users/${this.props.user.id}`,{
            method: "PATCH",
            headers: {
                "accepts": "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify({
                high_score: this.state.score
            })
           })
           .then(response=>response.json())
        }   
    }

    deleteHandler = () => {
        fetch(`http://localhost:3000/users/${this.props.user.id}`,{ method: "DELETE"}
    )}

    render(){
        return(
        <div>
        <h1>Hi, {this.state.user} </h1>
        <h3>Your Score is: {this.state.score}</h3>
        <NavLink to='/login' onClick={this.deleteHandler}>Delete</NavLink>
        </div>
        )
    }

}

export default Profile