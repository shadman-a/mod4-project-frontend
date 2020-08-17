import React from 'react'

class Profile extends React.Component{

    state ={
        user: this.props.user.username,
        score: this.props.points


    }

    componentDidMount(){
        fetch('http://localhost:3000/game_plays', {
            method: "POST",
            headers: {
                "accepts": "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify({
                character_id: this.props.character.id,
                user_id: this.props.user.id,
                points: this.props.points
            })
        })
    }

render(){
    return(
    <>
    <h1>Hi, {this.state.user} </h1>
    <h3>Your Score is: {this.state.score}</h3>
    </>
    )
}

}

export default Profile