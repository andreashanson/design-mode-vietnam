import React, { Component } from 'react';
import './Fonts/fonts.css';
import './App.css';
import Header from './Components/Header';
import Boutique from './Components/Boutique';
import Story from './Components/Story';
import Community from './Components/Community';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="scroll-content">
          <Boutique header ="boutique" />
          <Story header="story" />
          <Community header="community" />
          <section id="section-4" className="main-section"><h1>reach us</h1></section>
          <section id="section-5" className="main-section"><h1>ship+ return</h1></section>
        </div>
      </div>
    );
  }
}

export default App;
