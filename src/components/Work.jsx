import React, { Component } from 'react';

class Work extends Component {
  render() {
    return (
      <div id="work-section">
        <div className="header">
          <div>Experience</div>
          <div className="line" />
        </div>
        <div className="work">
          <div className="position">Junior Web Developer</div>
          <div className="company">Amazon inc.</div>
          <div className="dates">2016 - 2023</div>
          <ul className="duties">
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, quas?</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, quas?</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, quas?</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, quas?</li>
          </ul>

        </div>
      </div>
    );
  }
}

export default Work;
