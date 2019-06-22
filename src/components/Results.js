import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Main.css';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] }
  }

  componentWillUpdate(nextProps) {
    const { words } = this.props;
    console.log('will update' + words);
    console.log(nextProps)
  }

  render() {
    console.log('render');
    console.log(this.props);
    return (
      <div className="Result">
        <div className="Result-header">Result</div>
        <ul>
        {
          this.props.words.map(word => {
            return(<li key={word}>{word}</li>)
          })
        }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  words: state.wordlist.words
});

export default connect(mapStateToProps)(Results);
