import React, { Component } from 'react'
import Chip from '@material-ui/core/Chip';
import './style.css';

export default class Preference extends Component {


  constructor(props) {
    super(props);
    this.state = {
      prefer_1 : '',
      prefer_2 : [],
      prefer_3 : [],
      prefer_4 : '',
      prefer_5 : ''
    }

    this.prefer1 = this.prefer1.bind(this);
    this.prefer2 = this.prefer2.bind(this);
    this.prefer3 = this.prefer3.bind(this);
    this.prefer4 = this.prefer4.bind(this);
    this.prefer5 = this.prefer5.bind(this);
  }

  prefer1(value) {
    console.log(value);
    this.setState({
      prefer_1 : value
    });
    console.log(this.state);
  }

  prefer2(value) {
    console.log(value);
  }

  prefer3(value) {
    console.log(value);
  }

  prefer4(value) {
    console.log(value);
  }

  prefer5(value) {
    console.log(value);
  }


  render() {

    
    return (
      <div className="preference-wrapper">
        <div className="preference-1">
          <h1 className="about-u">Tell Us About Yourself : {this.state.prefer_1} </h1>
          
          <Chip label="Male"
                className="chips"
                color="primary"
                onClick={ () => this.prefer1('male') }
          />
          <Chip label="Female"
                className="chips"
                color="secondary"
                onClick={ () => this.prefer1('female') }
          />
        
        </div>

        <div className="preference-2">
          <h1 className="about-u">Tell Us Where You Are</h1>
          
          <Chip label="Pub"
                className="chips"
                color="primary"
                onClick={ () => this.prefer2('pub') }

          />
          
          <Chip label="Bar"
                className="chips"
                color="primary"
                onClick={ () => this.prefer2('bar') }

          />

          <Chip label="Your House"
                className="chips"
                color="primary"
                onClick={ () => this.prefer2('your_house') }
          />
          
          <Chip label="Your Friend's House"
                className="chips"
                color="primary"
                onClick={ () => this.prefer2('your_friend_house') }
          />

          <Chip label="Outdoor"
                className="chips"
                color="primary"
                onClick={ () => this.prefer2('outdoor') }

          />

          <Chip label="Professional Premise"
                className="chips"
                color="primary"
                onClick={ () => this.prefer2('professional_space') }

          />

        </div>

        <div className="preference-3">
          <h1 className="about-u">Whom you are with</h1>
          
          <Chip label="Casual Friends"
                className="chips"
                color="primary"
                onClick={ () => this.prefer3('casual_friends') }

          />
          <Chip label="Professional Friend"
                className="chips"
                color="primary"
                onClick={ () => this.prefer3('professional_friends') }

          />
          <Chip label="Colleagues"
                className="chips"
                color="primary"
                onClick={ () => this.prefer3('colleagues') }

          />
          <Chip label="Strangers"
                className="chips"
                color="primary"
                onClick={ () => this.prefer3('strangers') }

          />
          <Chip label="Newly Met"
                className="chips"
                color="primary"
                onClick={ () => this.prefer3('newly_met') }

          />
          <Chip label="Close Friends"
                className="chips"
                color="primary"
                onClick={ () => this.prefer3('close_friends') }

          />

        </div>

        <div className="preference-4">
          <h1 className="about-u">How Drunk You Want To Be</h1>
          
          <Chip label="Sober"
                className="chips"
                color="primary"
                onClick={ () => this.prefer4('sober') }

          />
          <Chip label="Casual"
                className="chips"
                color="primary"
                onClick={ () => this.prefer4('casual') }

          />
          <Chip label="Wild"
                className="chips"
                color="primary"
                onClick={ () => this.prefer4('wild') }

          />         

        </div>


        <div className="preference-5">
          <h1 className="about-u">What Time Of Day It Is</h1>
          
          <Chip label="Blue Sky"
                className="chips"
                color="primary"
                onClick={ () => this.prefer5('bluesky') }
                
          />
          <Chip label="Moonlight"
                className="chips"
                color="primary" 
                onClick={ () => this.prefer5('moonlight') }
                
          />         

        </div>
      </div>
    )
  }
}
