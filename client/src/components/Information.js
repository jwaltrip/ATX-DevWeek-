import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';
import './information.css';

class Information extends Component {
  render() {
    return (
  <div>
   <Jumbotron>
    <h4> You've got a break, we've got the tools to fix it. Select a problem from the options below
      to get a completed list of all that you'll need. </h4>
     </Jumbotron>
</div>
    );
  }
}

export default Information;