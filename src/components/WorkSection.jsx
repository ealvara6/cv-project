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
          dates: '2019-2023',
          position: 'Junior Web Developer',
          company: 'Amazon',
          tasks: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A cupiditate, incidunt quidem quam nesciunt tempore impedit minima inventore labore, expedita at quae officia quos unde error eaque ullam vel omnis eum atque nulla non! Accusantium, nulla! Recusandae nobis tempore accusantium beatae, quae assumenda minima deleniti numquam in. Inventore, asperiores nam!',
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
