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
            <div className="charactercard"> 
            <NavLink to='/play' onClick={this.clickHandler}>
            <img alt="spongey" src={this.props.character.image} width="250" height="250" className="characterimg"/>
            <h3 className="charactername">{this.props.character.name}</h3>
            </NavLink>
            </div>
        )
    }
}

export default CharacterCard