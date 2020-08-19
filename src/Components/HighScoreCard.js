import React from 'react'

class HighScoreCard extends React.Component{

    sortUsers = () => {
        let sortedUsers = this.props.users.sort((a,b) => a.high_score > b.high_score ? -1 : 1)
        return sortedUsers.map(user => user.high_score === 0 || user.high_score === null ? <p>{user.username}, 0 points</p>: <p>{user.username}, {user.high_score} points</p>)

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