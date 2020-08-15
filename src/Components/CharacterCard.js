import React from 'react'
import { NavLink } from "react-router-dom";

class CharacterCard extends React.Component{

    state={
        character: {}
    }

    clickHandler = () => {
        this.props.characterClickHandler(this.props.character)
    }

    render(){
        return(
            <ul> 
            <h1>Pick a Character</h1>
            <NavLink to='/play' onClick={this.clickHandler}>
            <img alt="spongey" src={this.props.character.image} width="200" height="200" />
            <h3>{this.props.character.name}</h3>
            </NavLink>
            </ul>
        )
    }
}

export default CharacterCard