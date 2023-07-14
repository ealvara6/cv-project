import React, { Component } from 'react';
import '../styles/SideSection.scss';
import ContactInfo from './ContactInfo';
import SchoolInfo from './SchoolInfo';

class SideSection extends Component {
  render() {
    return (
      <div id="side-section">
        <ContactInfo />
        <SchoolInfo />
      </div>
    );
  }
}

export default SideSection;
