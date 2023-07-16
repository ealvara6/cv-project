import React, { Component } from 'react';
import Cv from './components/Cv';
import './styles/App.scss';
import MainHeader from './components/MainHeader';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <>
        <MainHeader />
        <Cv />
        <Footer />
      </>
    );
  }
}

export default App;
