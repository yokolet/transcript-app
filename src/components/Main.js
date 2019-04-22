import React, { Component } from 'react';
import './Main.css';
import Results from './Results';
import SongTitles from './SongTitles';

class Main extends Component {
  render() {
    return (
      <div className="row Main">
        <div className="col s3">
          <SongTitles />
        </div>
        <div className="col s9">
          <Results />
        </div>
      </div>
    );
  }
}

export default Main;
