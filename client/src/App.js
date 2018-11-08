import React, { Component } from "react"
// import logo from './logo.svg';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

import './App.css';
import Header from "./components/Header";
import Cards from "./components/Cards";
// import Information from "./components/Information";
import SideBar from "./components/SideBar";



class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      {/* <Information/> */}
      <SideBar/>
      <Cards/>
      
      </div>
    );
  }
}

export default App;
