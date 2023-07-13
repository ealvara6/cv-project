import React, { Component } from 'react';
import '../styles/Cv.scss';
import Header from './Header';
import ContactInfo from './ContactInfo';
import AboutMe from './AboutMe';

class Cv extends Component {
  render() {
    return (
      <div id="cv">
        <Header />
        <ContactInfo />
        <AboutMe />
      </div>
    );
  }
}

export default Cv;
