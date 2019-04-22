import React, { Component } from 'react';
import PropTypes from 'prop-types'
import M from 'materialize-css';
import './Main.css';

class SongTitles extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = { songs: '' }
  }

  onSubmit = (event) => {
    event.preventDefault()
    let someSongs = false;
    if (this.state.songs.length < 1) {
      M.toast({html: 'Song list is empty'})
    } else {
      someSongs = true
    }
    if (someSongs) {
      this.props.onSubmit(this.state)
    }
  }

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.onSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="songs"
                className="materialize-textarea"
                value={this.state.songs}
                onChange={e => this.setState({ songs: e.target.value })}
              ></textarea>
              <label htmlFor="songs">Songs</label>
            </div>
          </div>
          <button className="btn-small waves-effect waves-light right" type="submit" name="action">Search</button>
        </form>
      </div>
    );
  }
}

SongTitles.propTypes = {
  songs: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
}

export default SongTitles;
