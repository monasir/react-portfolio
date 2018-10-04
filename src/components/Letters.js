import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
class Letter extends Component {
    handleHover() {
        let letters = document.querySelectorAll('.letter2');
        let letter = [...letters];
        letter.forEach( letter => {
          letter.addEventListener('mouseover', (e) => {
            letter.classList.add('hovered2');
          });
          
          letter.addEventListener('animationend', (e) => {
            letter.classList.remove('hovered2');
          });
        }
        );
       // this.setState({
       //   isHovered: !this.state.isHovered
        //});
      }
    render() {
        const lette = this.props.lette;
        return (
            
            
              <span id="a" className="letter2" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>{lette}</span>
           
              
           
          
        )
    }
}

export default Letter;