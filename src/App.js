import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { active: false, user: {} }
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {


    fetch('https://api.github.com/users/dougenas')
      .then(response => response.json())
      .then(data => {
        this.setState({ user: data })
        console.log(this.state)
      })

      //enables click functionality 
    this.setState(prevState => ({
      active: !prevState.active
    }));
  }

  render() {
    return (
      <div >
        <button onClick={this.handleClick}>Click Me</button>
        {this.state.active ?
          < div id='main' >
            <img src={this.state.user.avatar_url} />
            <div>{this.state.user.name}</div>
            <div>Following: {this.state.user.following}</div>
            <div>Url: {this.state.user.html_url}</div>
          </div>
          :
          null}
      </div>
    );
  }
}
    

export default App;
