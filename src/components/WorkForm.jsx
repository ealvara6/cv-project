import React, { Component } from 'react';

class WorkForm extends Component {
  render() {
    const {
      dates,
      position,
      company,
      tasks,
    } = { ...this.props };
    return (
      <form action="" className="work-form">
        <div className="dates">
          <label htmlFor="dates">Dates</label>
          <input type="text" name="dates" id="dates" value={dates} />
        </div>
        <div className="position">
          <label htmlFor="position">Position</label>
          <input type="text" name="position" id="position" value={position} />
        </div>
        <div className="company">
          <label htmlFor="company">Company</label>
          <input type="text" name="company" id="company" value={company} />
        </div>
        <div className="tasks">
          <label htmlFor="tasks">Tasks</label>
          <textarea name="tasks" id="tasks" cols="30" rows="10" defaultValue={tasks} />
        </div>
      </form>
    );
  }
}

export default WorkForm;
