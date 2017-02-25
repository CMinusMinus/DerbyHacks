import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar} from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
          title="Lyric Matchinator 3000"
          iconElementLeft={null}
          />
          <br/>
          <SearchBar onUserInput={()=>{}}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react-container'));
