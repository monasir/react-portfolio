import React, { Component } from 'react';
import '../App.css';
import Letters from './Letters';
import img from './img.jpg';
import SocialContacts  from './SocialContacts';
class About extends Component {
    

    render() {

        const letters = ['A','B','O','U','T'];
        const newLette = letters.map((letter,i) => <Letters key={i} lette={letter}/>);
        
        
        return (
            <div className="content">
                 <div className="titlestyle">
                 <div className="name">
                        <span className="logo2">
                            {newLette}
                        </span>
                    </div>
                 </div>
                 
                <div className="newflex">

                    <div className="aboutme">
                        <img src={img} className="circular" />
                        <div>
                            <p>some ahajhkjasdjkfhladjskf kajdfh kjd kajdfhjlhlk aiuhfjake ajdhf hduhf</p>
                            <p>some ahajhkjasdjkfhladjskf kajdfh kjd kajdfhjlhlk aiuhfjake ajdhf hduhf</p>
                            <p>some ahajhkjasdjkfhladjskf kajdfh kjd kajdfhjlhlk aiuhfjake ajdhf hduhf</p>
                            <p>some ahajhkjasdjkfhladjskf kajdfh kjd kajdfhjlhlk aiuhfjake ajdhf hduhf</p>
                            <p>some ahajhkjasdjkfhladjskf kajdfh kjd kajdfhjlhlk aiuhfjake ajdhf hduhf</p>
                        </div>
                    </div>
                    <SocialContacts />
                
                </div>


            </div>
        );
    }
}

export default About;