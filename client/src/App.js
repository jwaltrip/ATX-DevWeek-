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
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("/data")
      .then(res => res.json())
      .then(data => {
        this.setState({ data });
      });
  }

  render() {
    return (
      <div className="App">
        <Header/>
        {/* <Information/> */}
        <SideBar/>
        <Cards problems={this.state.data} />
      
      </div>
    );
  }
}

export default App;
