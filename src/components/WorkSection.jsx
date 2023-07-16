import React, { Component } from 'react';
import WorkForms from './WorkForms';
import Work from './Work';
import DisplayWork from './DisplayWork';

class WorkSection extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      viewWorkForms: false,
      work: [
        {
          id: 0,
          dates: '2019-2023',
          position: 'Junior Web Developer',
          company: 'Amazon',
          tasks: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A cupiditate, incidunt quidem quam nesciunt tempore impedit minima inventore labore, expedita at quae officia quos unde error eaque ullam vel omnis eum atque nulla non! Accusantium, nulla! Recusandae nobis tempore accusantium beatae, quae assumenda minima deleniti numquam in. Inventore, asperiores nam!',
        },
        {
          id: 1,
          dates: '2019-2023',
          position: 'Junior Web Developer',
          company: 'Amazon',
          tasks: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A cupiditate, incidunt quidem quam nesciunt tempore impedit minima inventore labore, expedita at quae officia quos unde error eaque ullam vel omnis eum atque nulla non! Accusantium, nulla! Recusandae nobis tempore accusantium beatae, quae assumenda minima deleniti numquam in. Inventore, asperiores nam!',
        },
      ],
    });

    this.openWorkForm = this.openWorkForm.bind(this);
    this.closeWorkForm = this.closeWorkForm.bind(this);
  }

  openWorkForm() {
    this.setState({
      viewWorkForms: true,
    });
  }

  closeWorkForm() {
    this.setState({
      viewWorkForms: false,
    });
  }

  render() {
    const { viewWorkForms, work } = { ...this.state };
    return (
      viewWorkForms
        ? <WorkForms work={work} closeWorkForm={this.closeWorkForm} />
        : <DisplayWork work={work} openWorkForm={this.openWorkForm} />
    );
  }
}

export default WorkSection;
