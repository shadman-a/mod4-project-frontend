import React from 'react'
import Jelly2 from '../jelly2.png'


class Jellies2 extends React.Component {
    intervalId = 0

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
        let currentTop = (Math.floor(Math.random() * (600 - 50)) + 0);
        this.firstJellyRef.current.style.top = currentTop + 'px'
        this.intervalId = setInterval(() => {this.moveJellyFish(currentTop)}, 1)
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

    componentWillUnmount(){
        clearInterval(this.intervalId)
    }

    render() {
        return(
            <img className="jellyfish1" alt="" src={Jelly2} ref={this.firstJellyRef} width="50" height="50"></img>
        )
    }
}


export default Jellies2