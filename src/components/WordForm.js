import React, { Component } from 'react';
import PropTypes from 'prop-types'
import M from 'materialize-css';
import './Main.css';

class WordForm extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = { words: '' }
  }

  onSubmit = (event) => {
    event.preventDefault()
    let someWords = false;
    if (this.state.words.length < 1) {
      M.toast({html: 'Word list is empty'})
    } else {
      someWords = true
    }
    if (someWords) {
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
                id="words"
                className="materialize-textarea"
                value={this.state.words}
                onChange={e => this.setState({ words: e.target.value })}
              ></textarea>
              <label htmlFor="words">English Words</label>
            </div>
          </div>
          <button className="btn-small waves-effect waves-light right"
                  type="submit"
                  name="action">
            Transcript
          </button>
        </form>
      </div>
    );
  }
}

WordForm.propTypes = {
  words: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
}

export default WordForm;
