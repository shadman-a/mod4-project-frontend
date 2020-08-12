import React from 'react'
import CharacterCard from '../Components/CharacterCard'

class CharactersList extends React.Component {
    
    getCharacter = () => {
        return this.props.characters.map(character => <CharacterCard key={character.id} character={character} characterClickHandler={this.props.characterClickHandler}/>)
    }

    render(){
        console.log(this.props)
        return(
            <>
            {this.getCharacter()}
            </>
        )
    }
}

export default CharactersList