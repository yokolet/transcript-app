import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Main.css';
import Results from './Results';
import WordForm from './WordForm';
import { createWordList } from '../utils/helper';

class Main extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = ({text}) => {
    let wordList = createWordList(text)
    console.log(wordList);
  }

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

Main.propTypes = {
}

export default Main;
