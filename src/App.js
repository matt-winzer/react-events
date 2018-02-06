import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import List from './components/List'

class App extends Component {
  state = { data: [], baseUrl: 'http://localhost:3000/mens'}

  componentDidMount() {
    fetch(this.state.baseUrl)
      .then(response => response.json())
      .then(data => this.setState({ data: data }))
  }

  render() {    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">FEF Concepts</h1>
        </header>
        <List sunglasses={this.state.data} />
      </div>
    )
  }
}

export default App
