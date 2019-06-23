import React from 'react';
import { Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from './NavBar';
import Main from './Main';
import About from './About';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />
      <Footer />
    </div>
  )
}

export default App