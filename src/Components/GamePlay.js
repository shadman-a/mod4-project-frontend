import React from 'react'

class GamePlay extends React.Component{

    render(){
        return(
        <h1>{this.props.character.name}</h1>
        )
    }

}

export default GamePlay