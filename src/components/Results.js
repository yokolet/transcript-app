import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import './Main.css';
import { updateTranscripts } from '../actions/update_transcripts';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { words, data, updateTranscripts } = this.props;
    console.log('did update' + words);
    console.log(prevProps)
    console.log(this.props)
    if(prevProps.words !== this.props.words) {
      data.fetchMore({
        variables: { words },
        updateQuery: (prev, { fetchMoreResult }) => {
          console.log('fetchMoreResult')
          console.log(fetchMoreResult)
          updateTranscripts(fetchMoreResult.transcripts)
        }
      })
    }
  }

  renderResults() {
    const { english, katakana } = this.props.transcripts
    return english.map(function(e, i) {
      return <li key={e}>{e}: {katakana[i].join()}</li>
    })
  }

  render() {
    return (
      <div className="Result">
        <div className="Result-header">Result</div>
        <ul>
          {this.renderResults()}
        </ul>
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
