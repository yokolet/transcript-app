import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import './Main.css';
import { updateTranscripts } from '../actions/update_transcripts';
import { getRandNumber } from '../utils/helper';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { words, data, updateTranscripts } = this.props;
    if(prevProps.words !== this.props.words) {
      data.fetchMore({
        variables: { words },
        updateQuery: (prev, { fetchMoreResult }) => {
          updateTranscripts(fetchMoreResult.transcripts)
        }
      })
    }
  }

  renderHeader() {
    const { katakana } = this.props.transcripts
    if(katakana.length === 0){
      return <th>Transcription</th>
    }else{
      let sizes = katakana.map(e => e.length)
      let max_size = Math.max(...sizes)
      let header = Array.from(Array(max_size).keys())
      if(max_size === 1){
        return <th>Transcription</th>
      }else{
        return header.map(h => {
          return <th key={h}>Transcription{h+1}</th>
        })
      }
    }
  }

  renderResults() {
    const { english, katakana } = this.props.transcripts
    return english.map(function(e, i) {
      return <tr key={e+getRandNumber()}>
        <td>{e}</td>
        {
          katakana[i].map(k => {
            return <td key={k+getRandNumber()}>{k}</td>
          })
        }
      </tr>
    })
  }

  render() {
    return (
      <div className="Result">
        <div className="Result-header">Result</div>
        <table>
          <thead>
            <tr>
              <th>English</th>
              {this.renderHeader()}
            </tr>
          </thead>
          <tbody>
            {this.renderResults()}
          </tbody>
        </table>
      </div>
    );
  }
}

const transcriptsGql = gql`
  query Transcripts($words: [String!]!) {
    transcripts(words: $words) {
      english
      katakana
    }
  }
`

const gqlWrapper = graphql(transcriptsGql, {
  options: (props) => {
    return { variables: { words: props.words } }
  }
})

const mapStateToProps = state => ({
  words: state.wordlist.words,
  transcripts: state.transcripts,
});

const mapDispatchToProps = dispatch => ({
  updateTranscripts: (data) => dispatch(updateTranscripts(data))
});

const reduxWrapper = connect(mapStateToProps, mapDispatchToProps);
export default compose(gqlWrapper, reduxWrapper)(Results);
