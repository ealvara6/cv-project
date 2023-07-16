import '../styles/WorkForms.scss';
import React, { Component } from 'react';
import WorkForm from './WorkForm';

class WorkForms extends Component {
  constructor(props) {
    super(props);

    const { work, counter } = { ...this.props };

    this.state = {
      counter,
      work,
    };

    this.handleChange = this.handleChange.bind(this);
    this.addWork = this.addWork.bind(this);
    this.deleteWork = this.deleteWork.bind(this);
  }

  handleChange(id, input, e) {
    const { work } = { ...this.state };
    const newWorkArr = work.map((item) => {
      if (item.id === id) {
        const tempWork = item;
        switch (input) {
          case 'dates':
            tempWork.dates = e.target.value;
            break;
          case 'position':
            tempWork.position = e.target.value;
            break;
          case 'company':
            tempWork.company = e.target.value;
            break;
          case 'tasks':
            tempWork.tasks = e.target.value;
            break;
          default:
            throw new Error();
        }
        return tempWork;
      }
      return item;
    });

    this.setState({
      work: newWorkArr,
    });
  }

  addWork() {
    const { counter, work } = { ...this.state };
    const newWorkArr = work;
    newWorkArr.push({
      id: counter,
      dates: '',
      position: '',
      company: '',
      tasks: '',
    });

    this.setState((prevState) => ({
      counter: prevState.counter + 1,
      viewWorkForms: prevState.viewWorkForms,
      work: newWorkArr,
    }));
  }

  deleteWork(id) {
    const { work } = { ...this.state };
    const workIndex = work.findIndex((item) => item.id === id);
    work.splice(workIndex, 1);

    this.setState({
      work,
    });
  }

  render() {
    const { work, counter } = { ...this.state };
    const { updateWork } = { ...this.props };
    const workFormArr = [];

    work.forEach((item) => {
      workFormArr.push(
        <li key={item.id}>
          <WorkForm
            id={item.id}
            dates={item.dates}
            position={item.position}
            company={item.company}
            tasks={item.tasks}
            handleChange={this.handleChange}
            deleteWork={this.deleteWork}
          />
        </li>,
      );
    });

    return (
      <ul id="work-forms">
        {workFormArr}
        <button type="button" className="add-work" onClick={this.addWork}>Add Work</button>
        <button type="button" className="save-button" onClick={() => updateWork(work, counter)}>Save</button>
      </ul>
    );
  }
}

export default WorkForms;
