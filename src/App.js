import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import OnBoarding from './components/onboarding';
import Preference from './components/preference';
import Game from './components/game';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currnetPage: "game"
    }
    this.changeCurrentPage = this.changeCurrentPage.bind(this);
  }
  
  changeCurrentPage(newPage) {
    console.log('app.js changeCurrentPage');
    this.setState({currnetPage: newPage});
  }
  render() {
    return (
      <div>
        {
          this.state.currnetPage == "onboarding"? <OnBoarding changeCurrentPage={this.changeCurrentPage}></OnBoarding>: null
        }
        {
          this.state.currnetPage == "preference"? <Preference changeCurrentPage={this.changeCurrentPage}></Preference>: null
        }
        {
          this.state.currnetPage == "game"? <Game changeCurrentPage={this.changeCurrentPage}></Game>: null
        }
      </div>
    );
  }
}

export default App;
