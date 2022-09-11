import React, {Component} from 'react';
import './App.css';
import Intro from '../Intro'
import Series from '../Containers/Series';
import 'whatwg-fetch';

class App extends Component{

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-title"> TV Series List</h2>
        </header>
        <Intro message = "You can assess your favourite movies here"/> 
        <Series/>
      </div>
    );
  }
}

export default App;
