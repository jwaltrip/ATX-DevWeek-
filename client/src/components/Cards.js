import React, { Component } from 'react';
import Project from "./PropCalls";
import hammer from '../hammer.png'
import { Jumbotron, Button, Image,Col,Row,Grid} from 'react-bootstrap';
import './Cards.css';
import ChecklistCard from "./ChecklistCard";

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showProblemCards: true,
      currentProblem: ''
    };

    this.listProblemCards = this.listProblemCards.bind(this);
    this.getFixesByName = this.getFixesByName.bind(this);
    this.showChecklistView = this.showChecklistView.bind(this);
    this.listChecklistCards = this.listChecklistCards.bind(this);
  }

  getFixesByName(problemName) {
    return this.props.problems.find(p => p.name === problemName);
  }

  showChecklistView(problem) {
    if (this.state.showProblemCards) {
      this.setState({ showProblemCards: !this.state.showProblemCards, currentProblem: problem });
    }
  }

  listProblemCards() {
    return this.props.problems.map((problem, idx) => {
      return (
        <Col xs={12} md={8} lg={4} onClick={()=> this.showChecklistView(problem.name)}>
          <Project
            key={idx}
            title={problem.name}
            fixes={this.getFixesByName(problem.name)}
          />
        </Col>
      );
    });
  }

  listChecklistCards() {
    if (this.state.currentProblem !== '') {
      const fixes = this.getFixesByName(this.state.currentProblem);

      console.log('fixes', fixes);

      return fixes.fixes.map((fix, idx) => {
        return (
          <Col xs={12} md={8} lg={4}>
            <ChecklistCard
              title={fix.name}
              problem={this.state.currentProblem}
              product={fix}
              limitImgHeight={false}
              showGithubSrcChip={false}
            />
          </Col>
        );
      });
    }
  }

  render() {
    // logic to show/hide grid
    let gridClass = '';
    if (!this.state.showProblemCards) {
      gridClass += ' hide';
    }

    let checklistClass = 'checklist';
    if (!this.state.showProblemCards) {
      checklistClass =+ ' show';
    }

    return (
      <div>
        <div className={gridClass}>
          <Grid>
            <Row className="show-grid">
              {this.listProblemCards()}
            </Row>
          </Grid>
        </div>

        <div className={checklistClass}>
          <Grid>
            <Row className="show-grid">
              <h1 className="checklist-title">{this.state.currentProblem} - Checklist</h1>
              {this.listChecklistCards()}
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Cards;