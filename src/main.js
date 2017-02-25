import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar} from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Results from './results';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


class App extends React.Component {
  render() {
    const cardhead = {
      marginRight: '30%',
      marginLeft: '30%',
      width: '40%'
    }


    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Lyric Matchinator 3000"
            iconElementLeft={null}
          />
          <br/>
          <Card>
            <CardHeader style={cardhead}>
              <SearchBar onUserInput={()=>{}}/>
            </CardHeader>
            <br/><br/><br/>
            <div>
              <Results onUserInput={()=>{}}/>
            </div>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react-container'));
