import React from 'react'

class HighScoreCard extends React.Component{

    sortUsers = () => {
        let sortedUsers = this.props.users.sort((a,b) => a.high_score > b.high_score ? 1 : -1)
        return sortedUsers.map(user => <p>{user.username}, {user.high_score}</p>)
    }

    render(){
        console.log(this.sortUsers())
    return (
        <div>
            {this.sortUsers()}
        </div>
    )
}
}

export default HighScoreCard