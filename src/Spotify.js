import React from 'react';
import { browserHistory } from 'react-router';

import { RaisedButton, TextField, Paper } from 'material-ui';

import { makePlaylist } from './ajax';

export default class Spotify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      status: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleClick(e) {
    const code = window.location.search.substring(window.location.search.indexOf('=') + 2);
    makePlaylist(this.state.value, code, (response) => {
      this.setState({
        status: 'success'
      });
    });
  }

  render() {
    return (
      <Paper>
        <TextField
          onChange={this.handleChange}
          hintText="Name your playlist"
          id="spotify"
        />
        <RaisedButton
          label="Create Playlist"
          onTouchTap={this.handleClick}
        />
    </Paper>
    );
  }
}
