import React from 'react';
import Letters from './Letters';
import SocialContacts from './SocialContacts';
import '../App.css';

const Contact = () => {
        const letters = ['C','O','N','T','A','C','T'];
        const newLette = letters.map((letter,i) => <Letters key={i} lette={letter}/>);
        const styling = {
            padding: '15px',
            fontSize: '20px',
            width: '30px',
            textAlign: 'center',
            textDecoration: 'none',
            margin:' 5px 7px',
            height: '30px',
        }

        return (
            <div className="content">
                <div className="titlestyle">
                    <div className="name">
                        <span className="logo2">
                            {newLette}
                        </span>
                    </div>
                </div>

                <SocialContacts styling={styling}/>

            </div>
        )
    
}


export default Contact;