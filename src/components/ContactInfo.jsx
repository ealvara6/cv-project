import React, { Component } from 'react';

class ContactInfo extends Component {
  render() {
    const {
      email,
      phone,
      address,
      openContactForm,
    } = { ...this.props };
    return (
      <div id="contact-info" onClick={openContactForm} onKeyDown={openContactForm} role="button" tabIndex={0}>
        <div className="header">
          <div>Contact</div>
          <div className="line" />
        </div>
        <div className="info">
          <div className="label">Email </div>
          <div className="email">{email}</div>
        </div>
        <div className="info">
          <div className="label">Phone </div>
          <div className="phone">{phone}</div>
        </div>
        <div className="info">
          <div className="label">Address </div>
          <div className="address">{address}</div>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
