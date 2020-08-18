import React from 'react'
import CharacterCard from '../Components/CharacterCard'

class CharactersList extends React.Component {
    
    getCharacter = () => {
        return this.props.characters.map(character => <CharacterCard key={character.id} character={character} characterClickHandler={this.props.characterClickHandler}/>)
    }

    render(){
        return(
            <>
            <h1 className="pick">Pick a Character</h1>
            <div className="characterscontainer">
            
            {this.getCharacter()}
            </div>
            </>
        )
    }
}

export default CharactersList