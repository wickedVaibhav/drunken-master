import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Preference from './components/preference';

class App extends Component {
  render() {
    return (
      <div >
          <Button variant="contained" color="primary">
            Thats how you show buttons
          </Button>
          <h1>
            View
            </h1>
            <u>https://material-ui.com/demos/buttons/</u>
           <h1> 
            for more.
          </h1>
          
          <Preference />
      </div>
    );
  }
}

export default App;
