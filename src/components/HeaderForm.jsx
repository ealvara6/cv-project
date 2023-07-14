import React, { Component } from 'react';

class HeaderForm extends Component {
  render() {
    const form = { ...this.props };
    return (
      <form id="header-form">
        <div className="first-name-form">
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="first-name" id="firstName" />
        </div>
        <div className="last-name-form">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="last-name" id="lastName" />
        </div>
        <div className="title-form">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div className="about-me-form">
          <label htmlFor="aboutMe">About Me</label>
          <textarea name="about-me" id="aboutMe" cols="30" rows="10" />
        </div>
        <button type="button" onClick={form.closeForm}>Save</button>
      </form>
    );
  }
}

export default HeaderForm;
