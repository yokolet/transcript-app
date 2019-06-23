import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <nav>
        <div className="row">
          <div className="col s12">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">Transcript English to Katakana</Link>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/about">About</Link></li>
              </ul>
            </div>
        </div>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  )
}