import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateWordList } from '../actions/update_wordlist';
import PropTypes from 'prop-types'
import M from 'materialize-css';
import './Main.css';

class WordForm extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = { text: '' }
  }

  onSubmit = (event) => {
    event.preventDefault()
    let someText = false;
    if (this.state.text.length < 1) {
      M.toast({html: 'Word list is empty'})
    } else {
      someText = true
    }
    if (someText) {
      this.props.updateWordList(this.state.text);
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
                maxLength="2000"
                className="materialize-textarea"
                value={this.state.text}
                onChange={e => this.setState({ text: e.target.value })}
              ></textarea>
              <label htmlFor="words">English Words (up to 2000 characters)</label>
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
  text: PropTypes.string,
}

const mapStateToProps = state => ({
  text: state.text,
});

const mapDispatchToProps = dispatch => ({
  updateWordList: (text) => dispatch(updateWordList(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(WordForm);
