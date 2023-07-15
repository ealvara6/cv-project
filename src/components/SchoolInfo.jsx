import React, { Component } from 'react';
import School from './School';

class SchoolInfo extends Component {
  render() {
    const { schools, openSchoolForm } = { ...this.props };
    const schoolItems = [];
    schools.forEach((school) => {
      schoolItems.push(
        <>
          <li key={school.id}>
            <School
              dates={school.dates}
              degree={school.degree}
              schoolName={school.schoolName}
            />
          </li>
          <div className="line" />
        </>,
      );
    });
    return (
      <div id="school-info" onClick={openSchoolForm} onKeyDown={openSchoolForm} role="button" tabIndex={0}>
        <div className="header">
          <div>Education</div>
          <div className="line" />
        </div>
        <ul id="schools">
          {schoolItems}
        </ul>
      </div>
    );
  }
}

export default SchoolInfo;
