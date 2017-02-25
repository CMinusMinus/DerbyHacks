import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchbar';

import {getSongs} from './ajax';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar} from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';

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
    const results = getSongs(this.state.textValue);
    this.setState({
      results
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
      <MuiThemeProvider>
        <div>
          <AppBar
          title="Lyric Matchinator 3000"
          iconElementLeft={null}
          />
          <br/>
          <SearchBar handleChange={this.handleInputChange} handleClick={this.getResults}/>

        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react-container'));
