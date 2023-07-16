import React, { Component } from 'react';

class WorkForm extends Component {
  render() {
    const {
      id,
      dates,
      position,
      company,
      tasks,
      handleChange,
      deleteWork,
    } = { ...this.props };
    return (
      <form action="" className="work-form">
        <div className="dates">
          <label htmlFor="dates">Dates</label>
          <input type="text" name="dates" id="dates" value={dates} onChange={(e) => handleChange(id, 'dates', e)} />
        </div>
        <div className="position">
          <label htmlFor="position">Position</label>
          <input type="text" name="position" id="position" value={position} onChange={(e) => handleChange(id, 'position', e)} />
        </div>
        <div className="company">
          <label htmlFor="company">Company</label>
          <input type="text" name="company" id="company" value={company} onChange={(e) => handleChange(id, 'company', e)} />
        </div>
        <div className="tasks">
          <label htmlFor="tasks">Tasks</label>
          <textarea name="tasks" id="tasks" cols="30" rows="10" value={tasks} onChange={(e) => handleChange(id, 'tasks', e)} />
        </div>
        <button type="button" className="delete-button" onClick={() => deleteWork(id)}>Delete</button>
      </form>
    );
  }
}

export default WorkForm;
