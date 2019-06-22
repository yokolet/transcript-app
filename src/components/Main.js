import React, { Component } from 'react';
import './Main.css';
import Results from './Results';
import WordForm from './WordForm';

class Main extends Component {
  render() {
    return (
      <div className="row Main">
        <div className="col s3">
          <WordForm onSubmit={this.onSubmit}/>
        </div>
        <div className="col s9">
          <Results />
        </div>
      </div>
    );
  }
}

export default Main;