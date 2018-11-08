import React, { Component } from 'react';
import {Navbar,Button,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import './Header.css';

class Header extends Component {
  render() {
    return (
  <div>
  <Navbar inverse>
    <h1 className="HD">THE ORANGE APRON ASSISTANT</h1>
    <p> You've got a problem. We've got the tools. Tap any of the cards below to find all the gear
      you'll need to make things happen. </p>
</Navbar>

</div>
    );
  }
}

export default Header;