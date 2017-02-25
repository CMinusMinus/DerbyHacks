import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchbar';

class App extends React.Component {
  render() {
    return (
      <div> <SearchBar onUserInput={()=>{}}/> </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react-container'));
