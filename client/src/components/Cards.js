import React, { Component } from 'react';
import Project from "./PropCalls";
import hammer from '../hammer.png'
import { Jumbotron, Button, Image,Col,Row,Grid} from 'react-bootstrap';
import './Cards.css';

class Cards extends Component {
  render() {
    return (
  <div>
   <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8} lg={4}>
            <Project 
              
              title=" COMMON PROBLEMS "
              
            
            />
            </Col>
          <Col xs={12} md={8} lg={4}>
            <Project
              title="BROKEN SINK"
            />
          </Col>
          <Col xs={12} md={8} lg={4}>
            <Project
              title="AC/VENTILATION"
             
            />
          </Col>
          <Col xs={12} md={8} lg={4}>
            <Project
              title="APPLIANCES"
              
            />
          </Col>
          <Col xs={12} md={8} lg={4}>
            <Project
              title="BROKEN RELATIONSHIPS"
            
            />
          </Col>
          <Col xs={12} md={8} lg={4}>
            <Project
              title=" HELP "
             
            />
          </Col>
       </Row>
   </Grid>
   </div>
    );
  }
}

export default Cards;