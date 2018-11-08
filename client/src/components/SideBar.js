import React, { Component } from 'react';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import './sideBar.css';

class SideBar extends Component {
  render() {
    return (
  <div>
	<div className="wrapper">

		<nav className="sideBar"> 


			<ul className="list-item-group">
				
			<li className="list-item">
		<a href="#"> BROWSE PROBLEMS  </a>
		</li>

			<li className="list-item">
		<a href="#"> BROWSE PROBLEMS  </a>
		</li>

			<li className="list-item">
		<a href="#"> BROWSE PROBLEMS  </a>
		</li>

			<li className="list-item">
		<a href="#"> BROWSE PROBLEMS  </a>
		</li>
			</ul>
		</nav>
	</div>
  </div>
    );
  }
}

export default SideBar;