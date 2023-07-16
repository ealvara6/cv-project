import React, { Component } from 'react';

class Work extends Component {
  render() {
    const {
      dates,
      position,
      company,
      tasks,
    } = { ...this.props };
    return (
      <div className="work">
        <div className="position">{position}</div>
        <div className="company">{company}</div>
        <div className="dates">{dates}</div>
        <div className="tasks">{tasks}</div>
      </div>
    );
  }
}

export default Work;
