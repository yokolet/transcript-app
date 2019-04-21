import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from './NavBar';
import Main from './Main';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}

export default App