import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="row">
          <div className="col s12">
            <h5><Link to="/"><i className="tiny material-icons">arrow_back</i>Top</Link></h5>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <h1 className="about-header">About</h1>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <div className='about-content'>
              This app transcripts English word(s) to Japannese Katakana expressions.
              The Katakana is a sound counterpart of English word.
              The purpose of this app is to generate a natural Japanese sound.
              Because of the purpose, results are not something cool English-like pronunciations in Katakana.
              Instead, those are more like Japanese English-ish.
            </div>
            <div className='about-content'>
              The transcription algorithm has been developed at: 
              <a href="https://github.com/yokolet/transcript">https://github.com/yokolet/transcript</a>.
              For the details of transcription process, please see the repository.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <h1 className="about-header">How To Use</h1>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <div className='about-content'>
              Input English words in the textfield on the left side.
              The words are either space, comma, newline separated or muxture of those.
              Then, click "Transcript" button. The result will show up on the right side.
              Example: <b>amazon apple google</b>
            </div>
            <div className='about-content'>
              For some words, IPA phonetics dictionary has multiple pronunciations.
              In such a case, multiple Katakana expressions will be displayed.
              Example: <b>slanted</b>.
            </div>
            <div className='about-content'>
              For some words, the same Katakana transcriptions appear multiple times. This happens when
              IPA phonetics dictionary has multiple pronunciations, but while processing, those became the same.
              For example, the word, "<b>english</b>," has two phonetics -- <b>ɪˈŋglɪʃ</b> and <b>ɪˈŋlɪʃ</b> .
              After consonants processing, those became identical.
            </div>
            <div className='about-content'>
              <h4>Error Code</h4>
              <ul>
                <li><i className="small material-icons">error</i> E_DIC: the words doesn't exist in the IPA phonetics dictionary</li>
                <li><i className="small material-icons">error</i> E_KEY: while proceeing the word transcription, an error occurred (will be fixed later)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <h1 className="about-header">GitHub</h1>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <div className='about-content'>
              This ReactJS app belongs to the trilogy of GitHub repositories.
              The transcription itself is in <b>transcript</b> repo.
              The web app to provide GraphQL endpoint is in <b>transcript-web</b> repo.
              This ReactJS app also a GraphQL client is in <b>transcript-app</b> repo.
            </div>
            <div className='about-content'>
              <h4>Repositories</h4>
              <ul>
                <li><i className="tiny material-icons">keyboard_arrow_right</i><a href="https://github.com/yokolet/transcript">https://github.com/yokolet/transcript</a></li>
                <li><i className="tiny material-icons">keyboard_arrow_right</i><a href="https://github.com/yokolet/transcript-web">https://github.com/yokolet/transcript-web</a></li>
                <li><i className="tiny material-icons">keyboard_arrow_right</i><a href="https://github.com/yokolet/transcript-app">https://github.com/yokolet/transcript-app</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;