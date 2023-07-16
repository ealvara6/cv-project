import React, { Component } from 'react';

class Work extends Component {
  render() {
    const {
      dates,
      position,
      company,
      tasks,
      openWorkForm,
    } = { ...this.props };
    return (
      <div id="work-section" onClick={openWorkForm} onKeyDown={this.openWorkForm} role="button" tabIndex={0}>
        <div className="header">
          <div>Experience</div>
          <div className="line" />
        </div>
        <div className="work">
          <div className="position">{position}</div>
          <div className="company">{company}</div>
          <div className="dates">{dates}</div>
          <div className="tasks">{tasks}</div>
        </div>
      </div>
    );
  }
}

export default Work;
