import React from 'react';
import { browserHistory } from 'react-router';

import { RaisedButton, TextField } from 'material-ui';

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
    makePlaylist(this.state.value, (response) => {
      this.setState({
        status: 'success'
      });
    });
  }

  render() {
    return (
      <div>
        <TextField
          onChange={this.handleChange}
          hintText="Name your playlist"
          id="spotify"
        />
        <RaisedButton
          label="Create Playlist"
          onTouchTap={this.handleClick}
        />
      </div>
    );
  }
}
