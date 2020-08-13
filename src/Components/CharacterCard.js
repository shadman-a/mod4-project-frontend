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
            <div>
                <img alt="spongey" src={this.props.character.image} />
                <NavLink to='/play' onClick={this.clickHandler}>
                    <h3>{this.props.character.name}</h3>
                </NavLink>
            </div>
        )
    }
}

export default CharacterCard