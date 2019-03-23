import React, { Component } from 'react';
import './Fonts/fonts.css';
import './App.css';
import Menu from './Components/Menu';
import Boutique from './Components/Boutique';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-logo">Logo</div>
          <Menu />
        </header>
        <div className="scroll-content">
          <Boutique />
          <section id="section-2" className="main-section">
            <h1>story</h1>
          </section>
          <section id="section-3" className="main-section"><h1>community</h1></section>
          <section id="section-4" className="main-section"><h1>reach us</h1></section>
          <section id="section-5" className="main-section"><h1>ship+ return</h1></section>
        </div>
      </div>
    );
  }
}

export default App;
