import React, { Component } from 'react';
import '../styles/Cv.scss';
import Header from './Header';
import SideSection from './SideSection';
import Work from './Work';

class Cv extends Component {
  render() {
    return (
      <div id="cv">
        <Header />
        <SideSection />
        <Work />
      </div>
    );
  }
}

export default Cv;
