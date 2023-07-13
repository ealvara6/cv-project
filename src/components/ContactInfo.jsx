import React, { Component } from 'react';

class ContactInfo extends Component {
  render() {
    return (
      <div id="contact-info">
        <div className="info">
          <div className="label">Email: </div>
          <div className="email">ealvara73@gmail.com</div>
        </div>
        <div className="info">
          <div className="label">Phone Number: </div>
          <div className="phone">777-777-7777</div>
        </div>
        <div className="info">
          <div className="label">Address: </div>
          <div className="address">702 fake ave</div>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
