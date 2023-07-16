import React, { Component } from 'react';
import WorkForms from './WorkForms';
import Work from './Work';

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
      ],
    });

    this.openWorkForm = this.openWorkForm.bind(this);
  }

  openWorkForm() {
    this.setState({
      viewWorkForms: true,
    });
  }

  render() {
    const { viewWorkForms, work } = { ...this.state };
    const workArr = [];

    work.forEach((item) => {
      workArr.push(
        <li key={item.id}>
          <Work
            dates={item.dates}
            position={item.position}
            company={item.company}
            tasks={item.tasks}
            openWorkForm={this.openWorkForm}
          />
        </li>,
      );
    });

    return (
      viewWorkForms ? <WorkForms work={work} /> : <ul>{workArr}</ul>
    );
  }
}

export default WorkSection;
