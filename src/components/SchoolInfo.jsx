import React, { Component } from 'react';
import School from './School';

class SchoolInfo extends Component {
  render() {
    return (
      <div id="school-info">
        <div className="header">
          <div>Education</div>
          <div className="line" />
        </div>
        <div id="schools">
          <School />
        </div>
      </div>
    );
  }
}

export default SchoolInfo;
