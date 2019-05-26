import React, { Component } from 'react';
import './Fonts/fonts.css';
import './App.css';
import Header from './Components/Header';
import Boutique from './Components/Boutique';
import Story from './Components/Story';
import Community from './Components/Community';
import Reach from './Components/Reach';
import ShipReturn from './Components/ShipReturn';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="scroll-content">
          <Boutique header ="boutique" />
          <Story header="story" />
          <Community header="community" />
          <Reach header="reach us" />
          <ShipReturn header="ship+ return" header2="Exchanges" />
        </div>
      </div>
    );
  }
}

export default App;
