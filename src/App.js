import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: []
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    const anchs = [...document.querySelectorAll('.links')];
    
    const anch = [...anchs];
  

    
    this.setState({
      links:anchs
    });

      //anchs[3].classList.add('underline');
      anchs.forEach((anchLink) => {
       
          anchLink.addEventListener('click',(e) => {
              anchs.forEach(anchLink => {
                  anchLink.classList.remove('underline');
              })
              anchLink.classList.add('underline');
  
              
          });
      })
  
}
  render() {
  
    return (
      <BrowserRouter>
      <div className="App">
        
          <Header handleClick={this.handleClick.bind(this)}/>
          <Switch>  
              <Route exact path="/" component={Home}/> 
              <Route path="/about" component={About}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/contact" component={Contact}/>
          </Switch>
      
      </div>
      </BrowserRouter> 
    );
  }
}

export default App;
