import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchbar';

import {getSongs, getAuthorizeCode} from './ajax';

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
  constructor(props) {
    super(props);
    this.state = {
      results: null,
      textValue: ''
    };

    this.getResults = this.getResults.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentDidMount(){
    if(window.location.pathname==="/spotify"){
      getAuthorizeCode();
    }
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
              <SearchBar handleChange={this.handleInputChange} handleClick={this.getResults} />
            </CardHeader>
            <br/><br/>
            <div>
              <Results results={this.state.results} />
            </div>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react-container'));
