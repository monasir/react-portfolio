import React from 'react';
import '../App.css';

const SocialContacts = ({styling}) => {
    console.log(styling);
    return (
        <div className="linkssocial">
                    <a href="#" className="fa fa-linkedin" style={styling}></a>
                    <a href="#" className="fa fa-instagram" style={styling}></a>
                    <a href="#" className="fa fa-reddit" style={styling}></a>
                    <a href="#" className="fa fa-github" style={styling}></a>
        </div>
    );
}

export default SocialContacts;