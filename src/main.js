import react from 'react';
import reactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div> Hey there </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react-container'));
