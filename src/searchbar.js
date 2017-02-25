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
      width: '60%',
      marginLeft: '20%',
      marginRight: '20%',
      textAlign: 'center',
      display: 'inline-block',
    };

    const search = {
      
    };

    const butt = {

    }

    return (
      <div>
        <div style={search}>
          <TextField
            id="SearchBar"
            hintText="Search for lyrics..."
            fullWidth
          />
        </div>
        <div style={butt}>
          <RaisedButton
            label="Find Songs!"
            primary={true}
          />
        </div>
      </div>
    );
  }
}
