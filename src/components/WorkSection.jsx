import React, { Component } from 'react';
import WorkForms from './WorkForms';
import DisplayWork from './DisplayWork';

class WorkSection extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      counter: 1,
      viewWorkForms: false,
      work: [
        {
          id: 0,
          dates: 'Dates',
          position: 'Add your position here',
          company: 'Add your company name here',
          tasks: 'Add your tasks here',
        },
      ],
    });

    this.openWorkForm = this.openWorkForm.bind(this);
    this.updateWork = this.updateWork.bind(this);
  }

  openWorkForm() {
    this.setState({
      viewWorkForms: true,
    });
  }

  updateWork(newWorkArr, counter) {
    this.setState({
      counter,
      viewWorkForms: false,
      work: newWorkArr,
    });
  }

  render() {
    const { viewWorkForms, work, counter } = { ...this.state };
    return (
      viewWorkForms
        ? <WorkForms work={work} updateWork={this.updateWork} counter={counter} />
        : <DisplayWork work={work} openWorkForm={this.openWorkForm} />
    );
  }
}

export default WorkSection;
