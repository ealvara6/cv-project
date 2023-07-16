import React, { Component } from 'react';
import SchoolForm from './SchoolForm';

class SchoolForms extends Component {
  constructor(props) {
    super(props);

    this.state = ({ ...this.props });

    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(id, e, input) {
    const { schools } = { ...this.state };

    schools.map((item) => {
      if (item.id === id) {
        const tempItem = item;
        switch (input) {
          case 'dates':
            tempItem.dates = e.target.value;
            break;
          case 'degree':
            tempItem.degree = e.target.value;
            break;
          case 'schoolName':
            tempItem.schoolName = e.target.value;
            break;
          default:
            throw new Error();
        }
        return tempItem;
      }
      return item;
    });

    this.setState({
      ...schools,
    });
  }

  handleDelete(id) {
    const { schools } = { ...this.state };
    const schoolIndex = schools.findIndex((item) => item.id === id);
    const newSchoolArr = schools.splice(schoolIndex, 1);

    this.setState({
      ...newSchoolArr,
    });
  }

  handleAdd() {
    const { schools } = { ...this.state };
    schools.push(
      {
        id: 2,
        dates: '',
        degree: '',
        schoolName: '',
      },
    );

    this.setState({
      ...schools,
    });
  }

  render() {
    const { schools, closeSchoolForm } = { ...this.props };
    const schoolForms = [];
    schools.forEach((school) => {
      schoolForms.push(
        <>
          <li key={school.id}>
            <SchoolForm
              id={school.id}
              dates={school.dates}
              degree={school.degree}
              schoolName={school.schoolName}
              handleChange={this.handleChange}
              handleDelete={this.handleDelete}
            />
          </li>
          <div className="line" />
        </>,
      );
    });
    schoolForms.push(
      <>
        <li className="add-school">
          <button type="button" onClick={this.handleAdd}>Add School</button>
        </li>
        <li key="school-form-button" className="school-form-button">
          <button type="button" onClick={closeSchoolForm}>Save</button>
        </li>
      </>,
    );
    return (
      <ul id="school-forms">
        {schoolForms}
      </ul>
    );
  }
}

export default SchoolForms;
