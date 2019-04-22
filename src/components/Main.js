import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Main.css';
import Results from './Results';
import SongTitles from './SongTitles';

class Main extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = ({songs}) => {
    let songList = songs.split("\n");
    console.log(songList);
  }

  render() {
    return (
      <div className="row Main">
        <div className="col s3">
          <SongTitles onSubmit={this.onSubmit}/>
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
