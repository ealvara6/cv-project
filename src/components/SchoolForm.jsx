import React, { Component } from 'react';

class SchoolForm extends Component {
  render() {
    const {
      id,
      dates,
      degree,
      schoolName,
      handleChange,
      handleDelete,
    } = { ...this.props };
    return (
      <form action="" className="school-form">
        <div className="dates">
          <label htmlFor="dates">Dates</label>
          <input type="text" name="dates" id="dates" value={dates} onChange={(e) => handleChange(id, e, 'dates')} />
        </div>
        <div className="degree">
          <label htmlFor="degree">Degree</label>
          <input type="text" name="degree" id="degree" value={degree} onChange={(e) => handleChange(id, e, 'degree')} />
        </div>
        <div className="school-name">
          <label htmlFor="schoolName">School</label>
          <input type="text" name="school-name" id="schoolName" value={schoolName} onChange={(e) => handleChange(id, e, 'schoolName')} />
        </div>
        <button type="button" onClick={() => handleDelete(id)}>Delete</button>
      </form>
    );
  }
}

export default SchoolForm;
