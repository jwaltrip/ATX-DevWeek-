import React, { Component } from 'react';
import './Cards.css'
const PropCalls = (props) => {
    return (
      <div className="layout">
      <div className="cards">
      <h1 >{props.title}</h1>
      {/* <i className="fas fa-hammer">{props.hammer}</i> */}
       <p >{props.desc}</p>
       </div>
       </div>
    );
  };
  export default PropCalls;