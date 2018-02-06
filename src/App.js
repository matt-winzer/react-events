import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import List from './components/List'

const devUrl = 'http://localhost:3000/goggles'

class App extends Component {
  state = { data: [], baseUrl: devUrl, loaded: false}

  componentDidMount() {
    fetch(this.state.baseUrl)
      .then(response => response.json())
      .then(data => this.setState({ data: data, loaded: true }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Front-End-Framework Concepts</h1>
        </header>
        {this.state.loaded ? <List sunglasses={this.state.data} /> : <h1>Loading...</h1>}
      </div>
    )
  }
}

export default App
