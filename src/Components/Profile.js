import React from 'react'

class Profile extends React.Component{

    state ={
        user: this.props.user.username,
        score: this.props.points
    }

    componentDidMount(){
        console.log(this.props.user.high_score)
        console.log(this.state.score)
        console.log(this.state.score > this.props.user.high_score || this.props.user.high_score === null)
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
           .then(console.log)
        }   
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