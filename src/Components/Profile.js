import React from 'react'

class Profile extends React.Component{

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
        .then(response => response.json())
    }

render(){
    return(
    <p>Hi {this.props.user.username}</p>
    )
}

}

export default Profile