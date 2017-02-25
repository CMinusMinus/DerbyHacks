import React from 'react';
import ReactDOM from 'react-dom';
import {TextField, Paper, RaisedButton} from 'material-ui';

export default class SearchBar extends React.Component {
  handleChange() {
    this.props.onUserInput(
      this.refs.filterTextInput.value
    );
  }

  render() {
    const paper = {
      height: '25%',
      width: '40%',
      marginLeft: '30%',
      marginRight: '30%',
      textAlign: 'center',
      display: 'inline-block',
    };

    const search = {
      marginRight: '5%',
      marginLeft: '5%',
      width: '90%',
    };

    const butt = {
      margin: 12,
    }

    return (
        <Paper style={paper} zDepth={2}>
          <div style={search}>
            <TextField
              id="SearchBar"
              hintText="Search for lyrics..."
              fullWidth
              onChange={this.props.handleChange}
            />
          </div>
          <div style={butt}>
            <RaisedButton
              label="Find Songs!"
              primary={true}
              onTouchTap={this.props.handleClick}
            />
          </div>
        </Paper>
    );
  }
}
