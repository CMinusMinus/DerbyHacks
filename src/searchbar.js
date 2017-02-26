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

    return (
      <div>
        <div>
          <TextField
            id="SearchBar"
            hintText="Search for lyrics..."
            fullWidth
            onChange={this.props.handleChange}
          />
        </div>
        <div>
          <RaisedButton
            label="Find Songs!"
            primary={true}
            onTouchTap={this.props.handleClick}
          />
        </div>
      </div>
    );
  }
}
