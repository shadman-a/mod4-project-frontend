import React from 'react';
import ArrowKeysReact from 'arrow-keys-react'
import styles from '../App.css'
class GamePlay extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,

    };
    ArrowKeysReact.config({
      left: () => {
        this.setState((state) => {
          return { rotateZ: state.rotateZ - 90 };
        });
      },
      right: () => {
        this.setState((state) => {
          return { rotateZ: state.rotateZ + 90 };
        });
      },
      up: () => {
        this.setState((state) => {
          return { rotateX: Math.min( state.rotateX + 45, 90) };
        });
      },
      down: () => {
        this.setState((state) => {
          return { rotateX: Math.max( state.rotateX - 45, 0) };
        });
      },
    });

  }
  
  render() {
    console.log(this.state)
    return(
    <div {...ArrowKeysReact.events} tabIndex="1">
      <div class="grid-container">
     
          <img id="image1" onKeyDown={ this.handleKeyDown } src={this.props.character.image} height="100" width="100"/>
     
      </div>
      </div>
    )
  }
  
  

}

export default GamePlay