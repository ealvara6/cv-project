import React, { Component } from 'react';
import School from './School';

class SchoolInfo extends Component {
  render() {
    const { schools } = { ...this.props };
    const schoolItems = [];
    schools.forEach((school) => {
      schoolItems.push(
        <School
          dates={school.dates}
          degree={school.degree}
          schoolName={school.schoolName}
        />,
      );
    });
    return (
      <div id="school-info">
        <div className="header">
          <div>Education</div>
          <div className="line" />
        </div>
        <div id="schools">
          {schoolItems}
        </div>
      </div>
    );
  }
}

export default SchoolInfo;
