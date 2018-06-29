import React, { Component } from 'react';
import Routes from './Routes';
import Footer from './components/Footer';
import './styles/all.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes/>
        <Footer/>
      </div>
    );
  }
}

export default App;
