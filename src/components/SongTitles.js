import React, { Component } from 'react';
import M from 'materialize-css';
import './Main.css';

class SongTitles extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <textarea id="songs" className="materialize-textarea"></textarea>
              <label htmlFor="songs">Songs</label>
            </div>
          </div>
          <button className="btn-small waves-effect waves-light right" type="submit" name="action">Search</button>
        </form>
      </div>
    );
  }
}

export default SongTitles;
