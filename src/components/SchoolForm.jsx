import React, { Component } from 'react';

class SchoolForm extends Component {
  render() {
    const { dates, degree, schoolName } = { ...this.props };
    return (
      <form action="" className="school-form">
        <div className="dates">
          <label htmlFor="dates">Dates</label>
          <input type="text" name="dates" id="dates" value={dates} />
        </div>
        <div className="degree">
          <label htmlFor="degree">Degree</label>
          <input type="text" name="degree" id="degree" value={degree} />
        </div>
        <div className="school-name">
          <label htmlFor="schoolName">School</label>
          <input type="text" name="school-name" id="schoolName" value={schoolName} />
        </div>
      </form>
    );
  }
}

export default SchoolForm;
