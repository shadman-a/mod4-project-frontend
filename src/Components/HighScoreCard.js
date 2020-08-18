import React from 'react'

class HighScoreCard extends React.Component{

    sortUsers = () => {
        let sortedUsers = this.props.users.sort((a,b) => a.high_score > b.high_score ? -1 : 1)
        return sortedUsers.map(user => <p>{user.username}, {user.high_score} points</p>)
    }

    render(){
        return (
            <div className="highscores">
                <h3>Top Users:</h3>
                {this.sortUsers()}
            </div>
        )
    }
}

export default HighScoreCard