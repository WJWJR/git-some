import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor () {
    super()
    this.state = {
      show: {}
    }
    this.focus = this.focus.bind(this);
  }

  componentDidMount () {
    axios.get('https://api.github.com/users/wjwjr')
    .then(response => {
      //console.log(response.data)
      this.setState({show:response.data})
    })
  }

  focus() {
    this.textInput.focus();
      console.log(this.textInput.value);
    axios.get("https://api.github.com/users/" + this.textInput.value)
      .then(response => {
        this.setState({show: response.data})
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          <input
            type="text"
            ref={(input) => {this.textInput = input;}}/>
          <input
          type="button"
          value="Focus the text input"
          onClick={this.focus.bind(this)}
          />
        </div>


        <img className="MyImage" src={this.state.show.avatar_url}/>
        <h1>{this.state.show.name}</h1>
        <p>I am located in, {this.state.show.location}</p>
        <p>My username is: {this.state.show.login}</p>
        <p>Check out my <a href={this.state.show.html_url} target="blank">github profile</a>. </p>
        <p>You can learn more about me and my code at my <a href={this.state.show.blog} target="blank">blog</a>.</p>
        <p>I am: {this.state.show.hireable ? "Hireable" : "Not Hireable"}</p>
      </div>
    );
  }
}

export default App;
