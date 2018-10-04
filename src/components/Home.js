import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
    handleHover() {
        let letters = document.querySelectorAll('.letter');
        let letter = [...letters];
        letter.forEach( letter => {
          letter.addEventListener('mouseover', (e) => {
            letter.classList.add('hovered');
          });
          
          letter.addEventListener('animationend', (e) => {
            letter.classList.remove('hovered');
          });
        }
        );
       // this.setState({
       //   isHovered: !this.state.isHovered 
        //});
      }

    render() {
        return (
            <div className="content" style={{paddingTop: "21vh"}}>
                <div className="name">
        <span className="logo">
          <span id="a" className="letter" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>M</span>
          <span id="a"  className="letter" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>O</span>
          <span id="a"  className="letter" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>.</span>
        </span>
          
        <span className="logo">
          <span id="a"  className="letter" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>N</span>
          <span id="a"  className="letter" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>A</span>
          <span id="a"  className="letter" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>S</span>
          <span id="a"  className="letter" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>I</span>
          <span id="a"  className="letter" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>R</span>
        </span>
        
      </div><p>My name is Mohamed Abdinasir and i build websites using javascript frameworks.</p>

            </div>
        );
    }
}

export default Home;