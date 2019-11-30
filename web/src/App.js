import React, {Component} from 'react';
import Logs from "./components/logs";
import Logo from './stairs.svg';
import './App.css';

class App extends Component {
   state = {
       logs: []
   }

   componentDidMount() {
       // TODO Replace with api call to all the logs
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({ logs: data })
                console.log(data)
            })
            .catch(console.log)
    }

  render () {
    return (
        <div className="App">
          <header className="App-header">
              <img src={Logo} alt='No Logo'></img>
              <h1>Stairoid App</h1>
              <center><h2>Log List</h2></center>
              <Logs logs={this.state.logs} />
          </header>
        </div>
    );
  }
}

export default App;
