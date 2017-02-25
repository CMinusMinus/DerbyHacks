import React from 'react';
import ReactDOM from 'react-dom';

export default class SearchBar extends React.Component {
  handleChange() {
    this.props.onUserInput(
      this.refs.filterTextInput.value
    );
  }
  
  render() {
    return (
      <form>
      <input
        type="text"
        placeholder="Search..."
        value={this.props.filterText}
        ref="filterTextInput"
        onChange={this.handleChange}
      />
      </form>
    );
  }
}
