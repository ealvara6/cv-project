/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';

class HeaderForm extends Component {
  constructor(props) {
    super(props);
    const {
      firstName,
      lastName,
      title,
      aboutMe,
      updateHeader,
    } = { ...this.props };

    this.state = ({
      firstName,
      lastName,
      title,
      aboutMe,
      updateHeader,
    });

    this.changeFormValue = this.changeFormValue.bind(this);
  }

  changeFormValue(e, input) {
    const trimmedValue = e.target.value.trim();

    switch (input) {
      case 'first-name':
        this.setState({ firstName: trimmedValue });
        break;
      case 'last-name':
        this.setState({ lastName: trimmedValue });
        break;
      case 'title':
        this.setState({ title: e.target.value });
        break;
      case 'about-me':
        this.setState({ aboutMe: e.target.value });
        break;
      default:
        throw Error();
    }
  }

  render() {
    const {
      firstName,
      lastName,
      title,
      aboutMe,
      updateHeader,
    } = { ...this.state };
    return (
      <form id="header-form">
        <div className="first-name-form">
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="first-name" id="firstName" value={firstName} onChange={(e) => this.changeFormValue(e, 'first-name')} />
        </div>
        <div className="last-name-form">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="last-name" id="lastName" value={lastName} onChange={(e) => this.changeFormValue(e, 'last-name')} />
        </div>
        <div className="title-form">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" value={title} onChange={(e) => this.changeFormValue(e, 'title')} />
        </div>
        <div className="about-me-form">
          <label htmlFor="aboutMe">About Me</label>
          <textarea name="about-me" id="aboutMe" cols="30" rows="10" value={aboutMe} onChange={(e) => this.changeFormValue(e, 'about-me')} />
        </div>
        <button type="button" onClick={() => updateHeader(firstName, lastName, title, aboutMe)}>Save</button>
      </form>
    );
  }
}

export default HeaderForm;
