import React from 'react'
import JellyFish1 from '../jellyfish1.png'


class Jellies extends React.Component {
    constructor(props){
        super(props)
        this.firstJellyRef = React.createRef()
        this.state={
            x: 0,
            y: 0
        }
      }


    componentDidMount() {
        this.firstJellyRef.current.style.left = '1000px'
        let currentTop = (Math.floor(Math.random() * (700 - 50)) + 0);
        this.firstJellyRef.current.style.top = currentTop + 'px'
        setInterval(() => {this.moveJellyFish(currentTop)}, 1)
    }

    moveJellyFish = (currentTop) => {
        this.setState({y: currentTop}, ()=>this.props.getCord(this.state.x, this.state.y))
        if (this.firstJellyRef.current) {
          let currentLeft = parseInt(this.firstJellyRef.current.style.left, 10);
          currentLeft -= 1;
          this.firstJellyRef.current.style.left = `${currentLeft}px`;
          this.setState({x: currentLeft},  ()=>this.props.getCord(this.state.x, this.state.y))
        }
    }

    render() {
        return(
            <img className="jellyfish1" alt="" src={JellyFish1} ref={this.firstJellyRef} width="50" height="50"></img>
        )
    }
}

export default Jellies