import React from 'react';

export default () => {
  return (
    <div>
      <nav>
        <div className="row">
          <div className="col s12">
            <div className="nav-wrapper">
              <a href="#!" className="brand-logo">Transcript English to Katakana</a>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="about.html">About</a></li>
              </ul>
            </div>
        </div>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li><a href="about.html">About</a></li>
      </ul>
    </div>
  )
}