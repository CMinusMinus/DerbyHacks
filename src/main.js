import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchbar';

let extraLink = "https://accounts.spotify.com/authorize?client_id=27eb8b96e2de49f5b58e337bc2b6d638&response_type=code&redirect_uri=https://localhost/spotify";

import {getSongs, getAuthorizeCode} from './ajax';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, RaisedButton } from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Results from './results';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

import { Router, DefaultRoute, Route, browserHistory } from 'react-router';

import Spotify from './Spotify';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
      textValue: ''
    };

    this.getResults = this.getResults.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  getResults() {
    const results = getSongs(this.state.textValue, (pageOne, pageTwo) => {
      this.setState({
        results: [...pageOne.data.items, ...pageTwo.data.items]
      });
    });
  }

  handleInputChange(e) {
    this.setState({
      textValue: e.target.value
    });
    console.log(this.state.textValue);
  }

  render() {
    return (
        <div className="row">
          <AppBar
            className="small-12 large-12"
            title="Lyric Matchinator 3000"
            iconElementLeft={null}
          />
          <br/>
          <RaisedButton
            href="https://accounts.spotify.com/authorize?client_id=27eb8b96e2de49f5b58e337bc2b6d638&response_type=code&redirect_uri=http://localhost/spotify"
            label="Put this on Spotify!"
          />
          <Card>
            <CardHeader style={cardhead}>
              <SearchBar handleChange={this.handleInputChange} handleClick={this.getResults} />
            </CardHeader>
            <br/><br/>
            <div>
              <Results results={this.state.results} />
            </div>
          </Card>
        </div>
    );
  }
}

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/spotify" component={Spotify} />
    </Router>
  </MuiThemeProvider>
  ,
  document.getElementById('react-container')
);
