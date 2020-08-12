import React from 'react'
import { NavLink } from "react-router-dom";

class CharacterCard extends React.Component{

    clickHandler = () => {
        this.props.characterClickHandler(this.props.character)
    }

    render(){
        return(
            <div>
                <img alt="spongey" src={this.props.character.image} />
                <NavLink to="/play" />
                <h3 onClick={this.clickHandler}>{this.props.character.name}</h3>
            </div>
        )
    }
}

export default CharacterCard