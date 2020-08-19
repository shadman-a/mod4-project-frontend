import React from 'react'
import { NavLink } from 'react-router-dom'

class Profile extends React.Component{

    state ={
        user: this.props.user.username,
        score: this.props.points,
        high_score: this.props.user.high_score
    }

    componentDidMount(){
        if (this.state.score > this.state.high_score || this.state.high_score === null){
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

    getHighScore = () => {
        if (this.props.user.high_score === 0 || this.props.user.high_score === null) {
            return <h2>Your High Score is: 0</h2>
        } else if (this.state.score > this.state.high_score) {
            return <h2>Your High Score is: {this.state.score}</h2>
        } else {
            return <h2>Your High Score is: {this.state.high_score}</h2>
        }
    }

    render(){
        return(
        <div className="welcomecontainer">
        <h1>Game Over</h1>
        <h1>Hi, {this.state.user} </h1>
        {/* {this.props.user.high_score === 0 || this.props.user.high_score === null ? <h2>Your High Score is: 0</h2> : <h2>Your High Score is: {this.props.user.high_score}</h2>} */}
            {this.getHighScore()}
        <h3>Your most recent score is: {this.state.score}</h3>
        <NavLink style={{color: 'white', textDecoration: 'none', backgroundColor: 'red', padding: '14px 25px'}} to='/login' onClick={this.deleteHandler}>Delete</NavLink>
        </div>
        )
    }

}

export default Profile