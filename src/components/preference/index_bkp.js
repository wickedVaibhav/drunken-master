import React, { Component } from "react";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import "./style.css";

export default class Preference extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prefer_1: "",
      prefer_2: [],
      prefer_3: [],
      prefer_4: "",
      prefer_5: ""
    };
  }

  componentDidMount() {
    console.log("hua mount");
    if (this.state.prefer_1 == "") {
      for (let i = 2; i <= 6; i++) {
        var preference = document.querySelector(".preference-" + i);
        preference.style.display = "none";
      }
    }
  }

  resetPreferences = () => {
    this.setState({ prefer_1: "" });
    this.setState({ prefer_2: [] });
    this.setState({ prefer_3: [] });
    this.setState({ prefer_4: "" });
    this.setState({ prefer_5: "" });
    this.showPreference(1);
  };

  prefer1 = value => {
    this.setState({
      prefer_1: value
    });
    this.showPreference(2);
  };

  prefer2 = value => {
    this.state.prefer_2.push(value); // this prefernce is an array
    this.setState({
      prefer_2: this.state.prefer_2
    });
    this.showPreference(3);
  };

  prefer3 = value => {
    this.state.prefer_3.push(value); // this prefernce is an array
    this.setState({
      prefer_3: this.state.prefer_3
    });
    this.showPreference(4);
  };

  prefer4 = value => {
    this.setState({
      prefer_4: value
    });
    this.showPreference(5);
  };

  prefer5 = value => {
    this.setState({
      prefer_5: value
    });
    console.log(this.state);
    document.querySelector(".preference-5").style.display = "none";
    document.querySelector(".confirm-preferences").style.display = "block";
  };

  showPreference(prefer_num) {
    for (let i = 1; i <= 6; i++) {
      var preference = document.querySelector(".preference-" + i);
      preference.style.display = "none";
    }
    document.querySelector(".preference-" + prefer_num).style.display = "block";
  }

  render() {
    return (
      <div className="preference-wrapper">
        <div className="preference-1 animated fadeInRight">
          <h1 className="about-u">Tell Us About Yourself </h1>

          <Chip
            label="Male"
            className="chips"
            color="primary"
            onClick={() => this.prefer1("male")}
          />
          <Chip
            label="Female"
            className="chips"
            color="primary"
            onClick={() => this.prefer1("female")}
          />
        </div>

        <div className="preference-2 animated fadeInRight">
          <h1 className="about-u">Tell Us Where You Are</h1>

          <Chip
            label="Pub"
            className="chips"
            color="primary"
            onClick={() => this.prefer2("pub")}
          />

          <Chip
            label="Bar"
            className="chips"
            color="primary"
            onClick={() => this.prefer2("bar")}
          />

          <Chip
            label="Your House"
            className="chips"
            color="primary"
            onClick={() => this.prefer2("your_house")}
          />

          <Chip
            label="Your Friend's House"
            className="chips"
            color="primary"
            onClick={() => this.prefer2("your_friend_house")}
          />

          <Chip
            label="Outdoor"
            className="chips"
            color="primary"
            onClick={() => this.prefer2("outdoor")}
          />

          <Chip
            label="Professional Premise"
            className="chips"
            color="primary"
            onClick={() => this.prefer2("professional_space")}
          />
        </div>

        <div className="preference-3 animated fadeInRight">
          <h1 className="about-u">Whom you are with</h1>

          <Chip
            label="Casual Friends"
            className="chips"
            color="primary"
            onClick={() => this.prefer3("casual_friends")}
          />
          <Chip
            label="Professional Friend"
            className="chips"
            color="primary"
            onClick={() => this.prefer3("professional_friends")}
          />
          <Chip
            label="Colleagues"
            className="chips"
            color="primary"
            onClick={() => this.prefer3("colleagues")}
          />
          <Chip
            label="Strangers"
            className="chips"
            color="primary"
            onClick={() => this.prefer3("strangers")}
          />
          <Chip
            label="Newly Met"
            className="chips"
            color="primary"
            onClick={() => this.prefer3("newly_met")}
          />
          <Chip
            label="Close Friends"
            className="chips"
            color="primary"
            onClick={() => this.prefer3("close_friends")}
          />
        </div>

        <div className="preference-4 animated fadeInRight">
          <h1 className="about-u">How Drunk You Want To Be</h1>

          <Chip
            label="Sober"
            className="chips"
            color="primary"
            onClick={() => this.prefer4("sober")}
          />
          <Chip
            label="Casual"
            className="chips"
            color="primary"
            onClick={() => this.prefer4("casual")}
          />
          <Chip
            label="Wild"
            className="chips"
            color="primary"
            onClick={() => this.prefer4("wild")}
          />
        </div>

        <div className="preference-5 animated fadeInRight">
          <h1 className="about-u">What Time Of Day It Is</h1>

          <Chip
            label="Blue Sky"
            className="chips"
            color="primary"
            onClick={() => this.prefer5("bluesky")}
          />
          <Chip
            label="Moonlight"
            className="chips"
            color="primary"
            onClick={() => this.prefer5("moonlight")}
          />
        </div>

        <div className="preference-6 confirm-preferences hide animated fadeInBottom">
          <p>
            You Are : {this.state.prefer_1} <br />
          </p>
          <p>
            You Are At : {this.state.prefer_2.map(c => c)} <br />
          </p>
          <p>
            You Are With : {this.state.prefer_3.map(c => c)} <br />
          </p>
          <p>
            You Want to : {this.state.prefer_4} <br />
          </p>
          <p>
            Time of Day : {this.state.prefer_5} <br />
          </p>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.resetPreferences}
          >
            Reset
          </Button>
        </div>
      </div>
    );
  }
}
