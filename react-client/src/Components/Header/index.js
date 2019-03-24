import React from 'react';
import Menu from '../Menu';
import SoMe from '../SoMe';
import './Header.css';

const Header = (props) => (
    <header id="App-header" className="App-header">
        <SoMe />
        <Menu />
    </header>
)
export default Header;