import React from 'react';
import Jellies from './Jellies'
import Jellies2 from './Jellies2'
import { NavLink } from "react-router-dom";

class GamePlay extends React.Component{

  constructor(props){
    super(props)
    this.characterRef = React.createRef()
    document.addEventListener('keydown', this.handleKeyDown)
    this.state={
      currentJellyLeft: 0,
      currentJellyBottom: 0,
      currentJellyLeft2: 0,
      currentJellyBottom2: 0,
      collide: false,
      points: 0
    }
  }

  didCollide = () => {
    if (this.characterRef.current)
    {if (this.characterRef.current.x < this.state.currentJellyLeft + 50 &&
        this.characterRef.current.x + this.characterRef.current.width > this.state.currentJellyLeft &&
        this.characterRef.current.y < this.state.currentJellyBottom + 50 &&
        this.characterRef.current.y + this.characterRef.current.height > this.state.currentJellyBottom
        ) {
          this.setState({
          currentJellyLeft: 0,
          currentJellyBottom: 0,
          currentJellyLeft2: 0,
          currentJellyBottom2: 0,
          collide: true,
          points:  (this.state.points + 1)
        })
      }}
  }

  didCollide2 = () => {
    if (this.characterRef.current)
    {if (this.characterRef.current.x < this.state.currentJellyLeft2 + 50 &&
        this.characterRef.current.x + this.characterRef.current.width > this.state.currentJellyLeft2 &&
        this.characterRef.current.y < this.state.currentJellyBottom2 + 50 &&
        this.characterRef.current.y + this.characterRef.current.height > this.state.currentJellyBottom2
        ) {
          this.setState({
          currentJellyLeft: 0,
          currentJellyBottom: 0,
          currentJellyLeft2: 0,
          currentJellyBottom2: 0,
          collide: false,
          points: (this.state.points + 1)
        })
      }}
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
      } else if (event.key === 'ArrowUp') {
        let currentBottom = parseInt(this.characterRef.current.style.bottom, 10)
        if (currentBottom >= 0 && currentBottom < 1000){
          currentBottom += 20
          this.characterRef.current.style.bottom = `${currentBottom}px`}
      } else if (event.key === 'ArrowDown') {
        let currentBottom = parseInt(this.characterRef.current.style.bottom, 10)
        if (currentBottom > 0 && currentBottom < 1000){
          currentBottom -= 20
          this.characterRef.current.style.bottom = `${currentBottom}px`}
      } else if (event.key === 'ArrowLeft') {
        let currentLeft = parseInt(this.characterRef.current.style.left, 10);
        if (currentLeft > 0 && currentLeft < 1600){
          currentLeft -= 20
          this.characterRef.current.style.left = `${currentLeft}px`}
      }
    }
  }

  getCord=(x, y)=>{
    this.setState({
      currentJellyLeft: x, 
      currentJellyBottom: y
    })
  }

  getCord2=(x, y)=>{
    this.setState({
      currentJellyLeft2: x, 
      currentJellyBottom2: y
    })
  }

  clickHandler = () => {
    this.props.pointsClickHandler(this.state.points)
  }

  render(){
    if (this.state.currentJellyLeft !== 0 && !this.state.collide) {
      setTimeout(this.didCollide, 10)
    }
    else if (this.state.currentJellyLeft2 !== 0 && this.state.collide) {
      setTimeout(this.didCollide2, 10)
    } 
    return(
      <>
      <h3 className="points">Points: {this.state.points}</h3>
      {this.state.collide ? <Jellies2 getCord={this.getCord2}/> : <Jellies getCord={this.getCord}/>}
      <img className="character-img" alt="" ref={this.characterRef} src={this.props.character.image} width="100" height="100"/>
      <NavLink to="/Profile" onClick={this.clickHandler}>End Game</NavLink>
      </>
    )
  }

}

export default GamePlay