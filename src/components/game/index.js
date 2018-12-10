import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import game from '../data'
import './style.css';
export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameTitle: "Lets Play"
    }
  }
  next() {
    console.log('game length :', game.length);
    let gameIntex = Math.floor(Math.random() * Math.floor(game.length));
    this.setState({gameTitle: game[gameIntex].title});
  }
  render() {
    return (
      <div>
        <AppBar position="static" color="primary" >
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Drunken Master
            </Typography>
          </Toolbar>
        </AppBar>
        <div>
          <Card className="card-wrapper">
            <CardContent className="cardContent-wrapper">
            <Typography color="textSecondary">
              {this.state.gameTitle}
            </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="next-button-wrapper">
          <Button variant="extendedFab" aria-label="Delete" onClick={()=> this.next()}>
          <i className="material-icons">
            navigate_next
          </i>
        </Button>
        </div>
      </div>
    )
  }
}
