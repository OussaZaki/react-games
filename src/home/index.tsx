import * as React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React Games</h1>
          <h3 className="App-title">This is a collection of classic games developped using react.</h3>
        </header>
        <div className="App-list">
            {/* List of games goes here */}
        </div>
      </div>
    );
  }
}

export default Home;
