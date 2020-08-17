import React from 'react'
import { NavLink } from "react-router-dom";
import axios from 'axios'


class Profile extends React.Component{

state={
    loggedIn: "",
    users: []
}

componentDidMount(){
    axios.get('http://localhost:3000/logged_in', {withCredentials: true})
    .then(response => response.data.user.username)
    .then(userFetch => this.setState({
        loggedIn: userFetch
    }))
}

userFetch(){
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users => this.setState({
        users: users.users
    }))
}

compareUsers(){
    return this.state.users.find(user=>user.username==this.state.loggedIn)
}

render(){
    this.userFetch()
    this.compareUsers()
    return(
        <p>{this.compareUsers().username}</p>
    )
}

}

export default Profile