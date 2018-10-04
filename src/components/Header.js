import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
class Header extends Component {
    
    render() {
        return (
            <div className="header">
                <Link to="/contact" className="links" onClick={this.props.handleClick}>Contact</Link>
                <Link to="/Projects" className="links" onClick={this.props.handleClick}>Projects</Link>
                <Link to="/about" className="links" onClick={this.props.handleClick}>About</Link>
                <Link to="/" className="links" onClick={this.props.handleClick}>Home</Link>
                
            </div>
        )
    }
}

export default Header;