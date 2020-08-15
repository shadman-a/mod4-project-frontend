import React from 'react';
import Jellies from './Jellies'

class GamePlay extends React.Component{

  constructor(props){
    super(props)
    this.characterRef = React.createRef()
    this.firstJellyRef = React.createRef()
    // this.secJellyRef = React.createRef()
    document.addEventListener('keydown', this.handleKeyDown)
    this.state={
      currentJellyLeft: 0,
      currentJellyBottom: 0,
      currentCharLeft: 0,
      currentCharTop: 0,
      collide: false
    }
  }

  didCollide = () => {
    if (this.characterRef.current.x < this.state.currentJellyLeft + 50 &&
        this.characterRef.current.x + this.characterRef.current.width > this.state.currentJellyLeft &&
        this.characterRef.current.y < this.state.currentJellyBottom + 50 &&
        this.characterRef.current.y + this.characterRef.current.height > this.state.currentJellyBottom
        ) {this.setState({
          collide: true
        },()=>console.log(this.state.collide))}
  }

  componentDidMount(){
    this.characterRef.current.style.left = 0
    this.characterRef.current.style.bottom = 0
  }

  
  handleKeyDown = (event) => {
    if (this.characterRef.current) {
      if (event.key === 'ArrowRight') {
        let currentLeft = parseInt(this.characterRef.current.style.left, 10);
        if (currentLeft >= 0 && currentLeft < 1600) {
          currentLeft += 20
          this.characterRef.current.style.left = `${currentLeft}px`;}
        this.setState({currentCharLeft: currentLeft})
      } else if (event.key === 'ArrowUp') {
        let currentBottom = parseInt(this.characterRef.current.style.bottom, 10)
        if (currentBottom >= 0 && currentBottom < 1000){
          currentBottom += 20
          this.characterRef.current.style.bottom = `${currentBottom}px`}
        this.setState({currentCharTop: currentBottom})
      } else if (event.key === 'ArrowDown') {
        let currentBottom = parseInt(this.characterRef.current.style.bottom, 10)
        if (currentBottom > 0 && currentBottom < 1000){
          currentBottom -= 20
          this.characterRef.current.style.bottom = `${currentBottom}px`}
        this.setState({currentCharTop: currentBottom})
      } else if (event.key === 'ArrowLeft') {
        let currentLeft = parseInt(this.characterRef.current.style.left, 10);
        if (currentLeft > 0 && currentLeft < 1600){
          currentLeft -= 20
          this.characterRef.current.style.left = `${currentLeft}px`}
        this.setState({currentCharLeft: currentLeft})
      }
    }
  }

  getCord=(x, y)=>{
    this.setState({
      currentJellyLeft: x, 
      currentJellyBottom: y
    })
  }

  render(){
  
    if (this.state.currentJellyLeft !== 0 && !this.state.collide) {
      this.didCollide()
    }
    return(
      <>
      <Jellies getCord={this.getCord}/>
      <img className="character-img" alt="" ref={this.characterRef} src={this.props.character.image} width="100" height="100"/>
      
      </>
    )
  }

}

export default GamePlay