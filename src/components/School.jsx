import React, { Component } from 'react';

class School extends Component {
  render() {
    const { dates, degree, schoolName } = { ...this.props };
    return (
      <div>
        <div className="dates">{dates}</div>
        <div className="degree">{degree}</div>
        <div className="school-name">{schoolName}</div>
      </div>
    );
  }
}

export default School;
