import React from 'react';
import Letters from './Letters';
import '../App.css'

class Projects extends React.Component {
    render() {
        const letters = ['P','R','O','J','E','C','T','S'];
        const newLette = letters.map((letter,i) => <Letters key={i} lette={letter}/>);
        const red = {
            color: 'white',
            
        };
       
        return (
            <div className="content">
                <div className="titlestyle">
                    <div className="name">
                        <span className="logo2">
                            {newLette}
                        </span>
                    </div>
                </div>
                <div className="cards">

                    <div className='card' >
                        <h5 >Human Resource services</h5>
                        <div className="icons"><i className="fa fa-pencil"></i></div>
                        <p>
                            
                        </p>
                        <ul >
                            <li>
                                <a href="#" style={red}>View Project</a>
                            </li>
                        </ul>
                        <p className="description">
                            I was in the process of building a human resource page for a potential client, based on a photoshop layout provieded by the client. After designing the first draft of the page, the client backed-out due to financial reasons.
                        </p>

                    </div>
                    <div className='card' ></div>
                    <div className='card' ></div>
                    <div className='card' ></div>

                </div>

            </div>
        )
    }
}

export default Projects;
