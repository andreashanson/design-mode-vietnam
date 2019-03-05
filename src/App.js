import React, { Component } from 'react';
import { AnimatedBg, Transition } from 'scroll-background';
import './App.css';

class App extends Component {
  render() {
    const ScrollContent = () => (
      <AnimatedBg>
        <div style={{ height: '1200px' }}>
          <header className="App-header">
            <div className="App-logo">Logo</div>
            <div className="App-menu">
              <ul>
                <li className="menu-1">BOUTIQUE</li>
                <li className="menu-2">STORY</li>
                <li className="menu-3">COMMUNITY</li>
                <li className="menu-4">REACH US</li>
                <li className="menu-5">SHIP + RETURN</li>
              </ul>
            </div>
          </header>
        </div>
        
        <Transition height="1200px" from="#E4BF18" to="#1825E4">
          <h1>Content that appears within the transition</h1>
        </Transition>

        <div style={{ height: '1200px' }} />
        <Transition height="1200px" from="#1825E4" to="#E48A18" position={0.75}>
          <h1>Content that appears within the transition</h1>
        </Transition>

        <div style={{ height: '1200px' }} />
        <Transition height="1200px" from="#E48A18" to="#EADDA8" position={0.75}>
          <h1>Content that appears within the transition</h1>
        </Transition>

        <div style={{ height: '1200px' }} />
        <Transition height="1200px" from="#EADDA8" to="#D9A8EA" position={0.75}>
          <h1>Content that appears within the transition</h1>
        </Transition>

        <div style={{ height: '1200px' }} />
        <Transition height="1200px" from="#D9A8EA" to="#FFFFFF" position={0.75}>
          <h1>Content that appears within the transition</h1>
        </Transition>

        <div style={{ height: '1200px' }} />
        <Transition height="1200px" from="#FFFFFF" to="#FFFFFF" position={0.75}>
          <h1>Content that appears within the transition</h1>
        </Transition>

      </AnimatedBg>
    )
    return (
      <div className="App">
        <ScrollContent />
      </div>
    );
  }
}

export default App;
