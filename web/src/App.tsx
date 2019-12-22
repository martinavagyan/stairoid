import React, {Component} from 'react';
import Logs from "./components/logs";
import './App.css';

class App extends Component {
  state = {
      logs: []
  }

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:3000/api/logs');
      const data = await response.json();
      this.setState({logs: data});
    } catch (error) {
      console.info(error);
    }
  }

  render () {
    return (
        <div className="App">
          <header className="App-header">
              <h1>Stairoids</h1>
          </header>
          <Logs logs={this.state.logs} />
        </div>
    );
  }
}

export default App;
