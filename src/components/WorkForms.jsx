import '../styles/WorkForms.scss';
import React, { Component } from 'react';
import WorkForm from './WorkForm';

class WorkForms extends Component {
  constructor(props) {
    super(props);

    this.state = ({ ...this.props });

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id, input, e) {
    const state = { ...this.state };
    const newWorkArr = state.work.map((work) => {
      if (work.id === id) {
        const tempWork = work;
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
      return work;
    });

    this.setState((prevState) => ({
      closeWorkForm: prevState.closeWorkForm,
      work: newWorkArr,
    }));
  }

  render() {
    const { work, closeWorkForm } = { ...this.state };
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
          />
        </li>,
      );
    });

    return (
      <ul id="work-forms">
        {workFormArr}
        <button type="button" className="add-work">Add Work</button>
        <button type="button" className="save-button" onClick={closeWorkForm}>Save</button>
      </ul>
    );
  }
}

export default WorkForms;
