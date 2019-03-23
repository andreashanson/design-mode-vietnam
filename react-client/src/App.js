import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-logo">Logo</div>
          <div className="App-menu">
            <ul>
              <li className="menu-1"><a href="#section-1">BOUTIQUE</a></li>
              <li className="menu-2"><a href="#section-2">STORY</a></li>
              <li className="menu-3"><a href="#section-3">COMMUNITY</a></li>
              <li className="menu-4"><a href="#section-4">REACH US</a></li>
              <li className="menu-5"><a href="#section-5">SHIP + RETURN</a></li>
            </ul>
          </div>
          </header>
          <div className="scroll-content">
            <section id="section-1" className="main-section">
            <h1>BOUTIQUE</h1>
            <div className="botique-section">
              <div>Picture 1</div><div>Picture 2</div><div>Picture 3</div>
            </div>
            </section>
            <section id="section-2" className="main-section">STORY</section>
            <section id="section-3" className="main-section">COMMUNITY</section>
            <section id="section-4" className="main-section">REACH US</section>
            <section id="section-5" className="main-section">SHIP + RETURN</section>
          </div>
      </div>
    );
  }
}

export default App;
