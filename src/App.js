import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import OnBoarding from './components/onboarding';
class App extends Component {
  render() {
    return (
      <OnBoarding></OnBoarding>
    );
  }
}

export default App;
