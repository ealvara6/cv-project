import '../styles/WorkForms.scss';
import React, { Component } from 'react';
import WorkForm from './WorkForm';
import Work from './Work';

class WorkForms extends Component {
  render() {
    const { work } = { ...this.props };
    const workFormArr = [];

    work.forEach((item) => {
      workFormArr.push(
        <li key={item.id}>
          <WorkForm
            dates={item.dates}
            position={item.position}
            company={item.company}
            tasks={item.tasks}
          />
        </li>,
      );
    });

    return (
      <ul id="work-forms">
        {workFormArr}
      </ul>
    );
  }
}

export default WorkForms;
