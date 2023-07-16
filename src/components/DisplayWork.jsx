import React, { Component } from 'react';
import Work from './Work';

class DisplayWork extends Component {
  render() {
    const { work, openWorkForm } = { ...this.props };
    const workArr = [];

    work.forEach((item) => {
      workArr.push(
        <li key={item.id}>
          <Work
            dates={item.dates}
            position={item.position}
            company={item.company}
            tasks={item.tasks}
          />
        </li>,
      );
    });

    return (
      <div id="work-section" onClick={openWorkForm} onKeyDown={this.openWorkForm} role="button" tabIndex={0}>
        <div className="header">
          <div>Experience</div>
          <div className="line" />
        </div>
        <ul id="work">
          {workArr}
        </ul>
      </div>
    );
  }
}

export default DisplayWork;
